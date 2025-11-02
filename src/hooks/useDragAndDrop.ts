import { useState, useCallback } from "react";

interface UseDragAndDropProps {
  onTaskMove: (
    taskId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => void;
}

export const useDragAndDrop = ({ onTaskMove }: UseDragAndDropProps) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const handleDragStartWithColumn = useCallback(
    (event: React.DragEvent<HTMLDivElement>, taskId: string, fromColumnId: string) => {
      setDraggedTaskId(taskId);
      event.dataTransfer.setData("fromColumn", fromColumnId);
      event.dataTransfer.effectAllowed = "move";
    },
    []
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (
      event: React.DragEvent<HTMLDivElement>,
      toColumnId: string,
      dropIndex: number = 0
    ) => {
      event.preventDefault();
      const fromColumnId = event.dataTransfer.getData("fromColumn");

      if (draggedTaskId && fromColumnId && toColumnId) {
        onTaskMove(draggedTaskId, fromColumnId, toColumnId, dropIndex);
      }

      setDraggedTaskId(null);
    },
    [draggedTaskId, onTaskMove]
  );

  return {
    draggedTaskId,
    handleDragStartWithColumn,
    handleDragOver,
    handleDrop,
  };
};
