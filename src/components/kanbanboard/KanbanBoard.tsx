import React, { useState } from "react";
import { KanbanViewProps, KanbanTask } from "./KanbanBoard.types";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "./TaskModal";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

export const KanbanBoard: React.FC<KanbanViewProps> = ({
  columns,
  tasks,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<KanbanTask | null>(null);

  const { handleDragStartWithColumn, handleDrop, handleDragOver } =
    useDragAndDrop({ onTaskMove });

  // Open empty modal to add new task
  const handleAddTask = (columnId: string) => {
    setSelectedColumn(columnId);
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  // Open modal for editing an existing task
  const handleTaskClick = (task: KanbanTask) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  //  Save or Update
  const handleSaveTask = (task: KanbanTask) => {
    if (selectedTask) {
      onTaskUpdate?.(selectedTask.id, task);
    } else if (selectedColumn) {
      onTaskCreate?.(selectedColumn, task);
    }
    setIsModalOpen(false);
  };

  //  Delete
  const handleDeleteTask = () => {
    if (selectedTask) {
      onTaskDelete?.(selectedTask.id);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-4 bg-blue-400 min-h-screen">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          tasks={column.taskIds.map((id) => tasks[id])}
          onAddTask={() => handleAddTask(column.id)}
          onTaskClick={handleTaskClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragStart={handleDragStartWithColumn}
        />
      ))}

      {/* Modal for both Add / Edit / Delete */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        onDelete={selectedTask ? handleDeleteTask : undefined}
        task={selectedTask}
      />
    </div>
  );
};
