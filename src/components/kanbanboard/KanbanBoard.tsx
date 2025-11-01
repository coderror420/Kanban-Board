import React, { useState } from "react";
import { KanbanViewProps, KanbanTask } from "./KanbanBoard.types";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "./TaskModal";

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
  const handleAddTask = (columnId: string) => {
    setSelectedColumn(columnId);
    setIsModalOpen(true);
  };

  const handleSaveTask = (task: KanbanTask) => {
    if (selectedColumn) {
      onTaskCreate(selectedColumn, task);
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          column={column}
          tasks={column.taskIds.map((id) => tasks[id])}
          onAddTask={() => handleAddTask(column.id)}
        />
      ))}

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
      />
    </div>
  );
};
