import React from "react";
import {KanbanBoard} from "./KanbanBoard";
import { KanbanTask } from "./KanbanBoard.types";

// ---- Sample Tasks ----
const sampleTasks = {
  "task-1": {
    id: "task-1",
    title: "Design homepage",
    description: "Create mockups in Figma for the homepage layout",
    status: "todo",
    priority: "high" as "high",
    createdAt: new Date(),
  },
  "task-2": {
    id: "task-2",
    title: "API Integration",
    description: "Connect frontend with backend endpoints",
    status: "in-progress",
    priority: "medium" as "medium",
    createdAt: new Date(),
  },
  "task-3": {
    id: "task-3",
    title: "Testing",
    description: "Write unit tests for Kanban board",
    status: "done",
    priority: "low" as "low",
    createdAt: new Date(),
  },
};

// ---- Sample Columns ----
const sampleColumns = [
  {
    id: "todo",
    title: "To Do",
    color: "#3B82F6",
    taskIds: ["task-1"],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#F59E0B",
    taskIds: ["task-2"],
  },
    {
    id: "done",
    title: "Done",
    color: "#10B981",
    taskIds: ["task-3"],
  },
];

// ---- Handlers (for Storybook logging) ----
const handleTaskMove = (taskId:string, from:string, to:string, index:number) => {
  console.log(`Moved ${taskId} from ${from} → ${to} at position ${index}`);
};

const handleTaskCreate = (columnId:string, task:KanbanTask) => {
  console.log(`Created task in ${columnId}:`, task);
};

const handleTaskUpdate = (taskId:string, updates: Partial<KanbanTask>) => {
  console.log(`Updated ${taskId}:`, updates);
};

const handleTaskDelete = (taskId: string) => {
  console.log(`Deleted ${taskId}`);
};

// ---- Default Export ----
export default {
  title: "Components/KanbanBoard",
  component: KanbanBoard,
};

// ---- Main Story ----
export const Default = () => (
  <KanbanBoard
    columns={sampleColumns}
    tasks={sampleTasks}
    onTaskMove={handleTaskMove}
    onTaskCreate={handleTaskCreate}
    onTaskUpdate={handleTaskUpdate}
    onTaskDelete={handleTaskDelete}
  />
);
