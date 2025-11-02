import React, { useState } from "react";
import { KanbanBoard } from "./KanbanBoard";
import { KanbanColumn, KanbanTask } from "./KanbanBoard.types";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
} as Meta<typeof KanbanBoard>;

//Sample data
const sampleTasks: Record<string, KanbanTask> = {
  "task-1": {
    id: "task-1",
    title: "Design homepage",
    description: "Create Figma mockups for homepage layout",
    status: "todo",
    priority: "high",
    createdAt: new Date(),
  },
  "task-2": {
    id: "task-2",
    title: "API integration",
    description: "Connect frontend with backend endpoints",
    status: "in-progress",
    priority: "medium",
    createdAt: new Date(),
  },
  "task-3": {
    id: "task-3",
    title: "Testing",
    description: "Write unit tests for task module",
    status: "done",
    priority: "low",
    createdAt: new Date(),
  },
};

const sampleColumns: KanbanColumn[] = [
  { id: "todo", title: "To Do", color: "#1E40AF", taskIds: ["task-1"] },
  { id: "in-progress", title: "In Progress", color: "#D97706", taskIds: ["task-2"] },
  { id: "done", title: "Done", color: "#15803D", taskIds: ["task-3"] },
];

export const Default: StoryFn = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);
  const [tasks, setTasks] = useState<Record<string, KanbanTask>>(sampleTasks);

  /**Move a task between columns */
  const handleTaskMove = (
    taskId: string,
    fromColumn: string,
    toColumn: string,
    newIndex: number
  ) => {
    setColumns((prevCols) => {
      const updatedCols = prevCols.map((col) => ({ ...col }));
      const fromCol = updatedCols.find((c) => c.id === fromColumn);
      const toCol = updatedCols.find((c) => c.id === toColumn);
      if (!fromCol || !toCol) return prevCols;

      fromCol.taskIds = fromCol.taskIds.filter((id) => id !== taskId);
      const insertIndex = Math.min(newIndex, toCol.taskIds.length);
      toCol.taskIds.splice(insertIndex, 0, taskId);

      return updatedCols;
    });

    setTasks((prev) => ({
      ...prev,
      [taskId]: { ...prev[taskId], status: toColumn },
    }));
  };

  /** Create a new task */
  const handleTaskCreate = (
    columnId: string,
    task: Omit<KanbanTask, "id" | "createdAt" | "status">
  ) => {
    const id = `task-${Date.now()}`;
    const newTask: KanbanTask = {
      ...task,
      id,
      status: columnId,
      createdAt: new Date(),
    };

    setTasks((prev) => ({ ...prev, [id]: newTask }));
    setColumns((prevCols) =>
      prevCols.map((col) =>
        col.id === columnId ? { ...col, taskIds: [...col.taskIds, id] } : col
      )
    );
  };

  /** Update task details */
  const handleTaskUpdate = (taskId: string, updates: Partial<KanbanTask>) => {
    setTasks((prev) => {
      const task = prev[taskId];
      if (!task) return prev;
      return { ...prev, [taskId]: { ...task, ...updates } };
    });
  };

  /** Delete a task */
  const handleTaskDelete = (taskId: string) => {
    // Remove task from tasks list
    setTasks((prev) => {
      const updated = { ...prev };
      delete updated[taskId];
      return updated;
    });

    // Remove taskId from its column
    setColumns((prevCols) =>
      prevCols.map((col) => ({
        ...col,
        taskIds: col.taskIds.filter((id) => id !== taskId),
      }))
    );
  };

  return (
    <KanbanBoard
      columns={columns}
      tasks={tasks}
      onTaskMove={handleTaskMove}
      onTaskCreate={handleTaskCreate}
      onTaskUpdate={handleTaskUpdate}
      onTaskDelete={handleTaskDelete} // Pass delete handler here
    />
  );
};
