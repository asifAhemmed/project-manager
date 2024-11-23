/* eslint-disable react/prop-types */
import { useState } from "react";

const AddProjectModal = ({ onAddTask, onCancel }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    category: "",
    title: "",
    description: "",
    date: "",
  });

  return (
    <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl fixed left-[40%]  flex items-center justify-center">
      <div className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
        <form onSubmit={(e) => onAddTask(e, formData)}>
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Task Name
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              type="text"
              id="taskName"
              name="taskName"
              required
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              id="description"
              name="description"
              rows="3"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Due Date
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              type="date"
              id="dueDate"
              name="dueDate"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Category
            </label>
            <select
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              id="category"
              name="category"
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="" selected>
                Select an option
              </option>
              <option value="To-Do">To-Do</option>
              <option value="On Progress">On Progress</option>
              <option value="Done">Done</option>
              <option value="Revised">Revised</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onCancel}
              type="button"
              className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
