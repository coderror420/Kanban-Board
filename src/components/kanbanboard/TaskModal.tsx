import React, { useState } from "react";
import { KanbanTask } from "./KanbanBoard.types";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: KanbanTask) => void;
  defaultTask?: KanbanTask;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
  defaultTask,
}) => {
  const [title, setTitle] = useState(defaultTask?.title || "");
  const [description, setDescription] = useState(defaultTask?.description || "");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) return alert("Title is required");

    const newTask: KanbanTask = {
      id: defaultTask?.id || Date.now().toString(),
      title,
      description,
      status: defaultTask?.status || "todo",
      createdAt: defaultTask?.createdAt || new Date(),
    };
    onSave(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">
          {defaultTask ? "Edit Task" : "Add New Task"}
        </h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded mb-3"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
