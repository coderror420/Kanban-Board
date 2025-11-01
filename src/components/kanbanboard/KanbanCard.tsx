import React from "react";
import { KanbanTask } from "./KanbanBoard.types";

interface KanbanCardProps {
  task: KanbanTask;
  onClick?: (task: KanbanTask) => void;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ task, onClick }) => {
  // Priority color mapping
  const priorityColors: Record<string, string> = {
    urgent: "border-red-500",
    high: "border-orange-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  const priorityClass = priorityColors[task.priority || "low"];

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-3 mb-2 cursor-pointer hover:shadow-lg transition border-l-4 ${priorityClass}`}
      onClick={() => onClick?.(task)}
    >
      <h3 className="font-semibold text-gray-800">{task.title}</h3>

      {task.description && (
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="mt-2 flex justify-end items-center">
        <span className="text-xs text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default KanbanCard;
