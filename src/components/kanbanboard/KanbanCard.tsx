import React, { useState } from "react";
import { KanbanTask } from "./KanbanBoard.types";

interface KanbanCardProps {
  task: KanbanTask;
  onClick?: (task: KanbanTask) => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const KanbanCard: React.FC<KanbanCardProps> = ({
  task,
  onClick,
  draggable = false,
  onDragStart,
  onDragEnd,
}) => {
  const [isDragging, setIsDragging] = useState(false);

  // Priority color mapping
  const priorityColors: Record<string, string> = {
    urgent: "border-red-500",
    high: "border-orange-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  const priorityClass = priorityColors[task.priority || "low"];

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    onDragStart?.(e);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
    onDragEnd?.(e);
  };

  return (
    <div
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={() => onClick?.(task)}
      className={`bg-white rounded-lg p-3 mb-2 cursor-pointer border-l-4 transition 
        ${priorityClass} 
        ${isDragging ? "opacity-50 scale-95" : "hover:shadow-lg shadow-md"}
      `}
    >
      <h3 className="font-semibold text-gray-800">{task.title}</h3>

      {task.description && (
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {task.description}
        </p>
      )}

   
    </div>
  );
};

export default KanbanCard;
