import { TaskContext } from "../contexts";
import AddProjectModal from "./AddProjectModal";
import ProjectCard from "./ProjectCard";
import { useState, useContext } from "react";

const ProjectBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, setData } = useContext(TaskContext);

  const handleAddTask = (e, formData) => {
    e.preventDefault();
    if (formData.category === "To-Do") {
      setData({
        ...data,
        toDo: [...data.toDo, formData],
      });
    } else if (formData.category === "On Progress") {
      setData({
        ...data,
        onProgress: [...data.onProgress, formData],
      });
    } else if (formData.category === "Done") {
      setData({
        ...data,
        done: [...data.done, formData],
      });
    } else {
      setData({
        ...data,
        revise: [...data.revise, formData],
      });
    }
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      {showModal && (
        <AddProjectModal onAddTask={handleAddTask} onCancel={handleCancel} />
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
        <ProjectCard name="To-Do" color="bg-indigo-600" data={data.toDo} />
        <ProjectCard name="On Progress" color="bg-yellow-500"  data={data.onProgress}/>
        <ProjectCard name="Done" color="bg-teal-500" data={data.done}/>
        <ProjectCard name="Revise" color="bg-rose-500" data={data.revise}/>
      </div>
    </div>
  );
};

export default ProjectBoard;
