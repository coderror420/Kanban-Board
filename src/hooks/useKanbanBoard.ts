import { useState } from "react";

/** Task structure */
export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  status: string; // column id
  priority?: "urgent" | "high" | "medium" | "low";
  createdAt: string;
}

/** Column structure */
export interface KanbanColumn {
  id: string;
  title: string;
  taskIds: string[];
}

/** Hook return type */
interface UseKanbanBoardResult {
  columns: KanbanColumn[];
  tasks: Record<string, KanbanTask>;
  moveTask: (
    taskId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => void;
  setTasks: React.Dispatch<React.SetStateAction<Record<string, KanbanTask>>>;
  setColumns: React.Dispatch<React.SetStateAction<KanbanColumn[]>>;
}

/**
 * Stores Kanban board state and provides task movement logic.
 */
export default function useKanbanBoard(
  initialColumns: KanbanColumn[],
  initialTasks: Record<string, KanbanTask>
): UseKanbanBoardResult {
  const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
  const [tasks, setTasks] = useState<Record<string, KanbanTask>>(initialTasks);

  const moveTask = (
    taskId: string,
    fromColumnId: string,
    toColumnId: string,
    newIndex: number
  ) => {
    setColumns((prevCols) => {
      const updatedCols = [...prevCols];

      // Find columns safely
      const fromCol = updatedCols.find((col) => col.id === fromColumnId);
      const toCol = updatedCols.find((col) => col.id === toColumnId);
      if (!fromCol || !toCol) return prevCols;

      // Remove task from old column
      fromCol.taskIds = fromCol.taskIds.filter((id) => id !== taskId);

      // Insert task into new column
      const insertIndex = Math.min(newIndex, toCol.taskIds.length);
      toCol.taskIds.splice(insertIndex, 0, taskId);

      return updatedCols;
    });

    // Update task's column (status)
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskId]: { ...prevTasks[taskId], status: toColumnId },
    }));
  };

  return { columns, tasks, moveTask, setTasks, setColumns };
}
