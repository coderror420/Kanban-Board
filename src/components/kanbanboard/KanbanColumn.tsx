import React from "react";
import { KanbanColumn as KanbanColumnType, KanbanTask } from "./KanbanBoard.types";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
  column: KanbanColumnType;
  tasks: KanbanTask[];
  onTaskClick?: (task: KanbanTask) => void;
  onAddTask?: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, toColumnId: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string,
    fromColumnId: string
  ) => void;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  tasks,
  onTaskClick,
  onAddTask,
  onDrop,
  onDragOver,
  onDragStart,
}) => {
  return (
    <div
      className="flex flex-col w-80 bg-gray-50 rounded-lg shadow h-[80vh] overflow-hidden"
      onDragOver={(e) => {
        e.preventDefault(); // ✅ Prevent default to allow drop
        onDragOver(e);
      }}
      onDrop={(e) => onDrop(e, column.id)}
    >
      {/* Column Header */}
      <div
        className="sticky top-0 z-10 p-3 text-white font-semibold text-lg rounded-t-lg"
        style={{ backgroundColor: column.color }}
      >
        {column.title}
      </div>

      {/* Tasks List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => onDragStart(e, task.id, column.id)}
            >
              <KanbanCard task={task} onClick={() => onTaskClick?.(task)} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 italic mt-6">No tasks yet</p>
        )}
      </div>

      {/* Add Task Button */}
      <button
        onClick={onAddTask}
        className="m-3 py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        + Add Task
      </button>
    </div>
  );
};

export default KanbanColumn;
