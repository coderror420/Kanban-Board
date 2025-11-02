import React, { useEffect, useState } from "react";
import { KanbanTask } from "./KanbanBoard.types";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: KanbanTask) => void;
  onDelete?: () => void;
  task?: KanbanTask | null;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onDelete,
  task,
}) => {
  const [formData, setFormData] = useState<KanbanTask>({
    id: "",
    title: "",
    description: "",
    priority: "low",
    status: "todo",
    createdAt: new Date(),
  });

  useEffect(() => {
    if (task) setFormData(task);
    else
      setFormData({
        id: "",
        title: "",
        description: "",
        priority: "low",
        status: "todo",
        createdAt: new Date(),
      });
  }, [task]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (formData.title.trim()) {
      onSave(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">
          {task ? "Edit Task" : "Add Task"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Task title *"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description || ""}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="urgent">Urgent</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <div className="flex justify-between items-center mt-4">
          {onDelete && (
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}

          <div className="flex gap-2 ml-auto">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              {task ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
