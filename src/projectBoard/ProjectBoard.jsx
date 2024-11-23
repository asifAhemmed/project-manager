import { TaskContext } from "../contexts";
import AddProjectModal from "./AddProjectModal";
import ProjectCard from "./ProjectCard";
import { useState, useContext } from "react";
import { toast } from "react-toastify";

const ProjectBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const { data, setData } = useContext(TaskContext);

  const handleAddTask = (e, formData) => {
    e.preventDefault();
    if (taskToUpdate) {
      const updatedData = { ...data };
      if (taskToUpdate.category !== formData.category) {
        updatedData[taskToUpdate.category] = data[taskToUpdate.category].filter(
          (item) => item.id !== taskToUpdate.id
        );
      }

      
      if (taskToUpdate.category === formData.category) {
        updatedData[formData.category] = data[formData.category].map((task) =>
          task.id === taskToUpdate.id ? formData : task
        );
      } else {
        updatedData[formData.category] = [...data[formData.category], formData];
      }
      setData(updatedData);
      setTaskToUpdate(null);
    } else {
      if (
        formData.title === "" ||
        formData.description === "" ||
        formData.date === "" ||
        formData.category === ""
      ) {
        toast.error("Please fill all the fields", {
          position: "bottom-right",
        });
      } else {
        setData({
          ...data,
          [formData.category]: [...data[formData.category], formData],
        });
      }
    }
    setShowModal(false);
  };
  const handleEditTask = (task) => {
    setShowModal(true);
    setTaskToUpdate({ ...task });
  };
  const handleDeleteTask = (task) => {
    setData({
      ...data,
      [task.category]: data[task.category].filter(
        (item) => item.id !== task.id
      ),
    });
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-auto max-w-7xl p-6">
      {showModal && (
        <AddProjectModal
          onAddTask={handleAddTask}
          onCancel={handleCancel}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>

      <div className="-mx-2 mb-6 flex flex-wrap">
        <ProjectCard
          name="To-Do"
          color="bg-indigo-600"
          data={data.toDo}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <ProjectCard
          name="On Progress"
          color="bg-yellow-500"
          data={data.onProgress}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <ProjectCard
          name="Done"
          color="bg-teal-500"
          data={data.done}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <ProjectCard
          name="Revise"
          color="bg-rose-500"
          data={data.revise}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default ProjectBoard;
