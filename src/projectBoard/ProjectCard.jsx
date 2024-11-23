/* eslint-disable react/prop-types */
import CardSort from "./CardSort";
import ContentCard from "./ContentCard";

const ProjectCard = ({ onEditTask,data,name,color }) => {
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className={`rounded-lg ${color} p-4`}>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <CardSort />
        </div>
        <div>
          <ContentCard data={data} onEditTask={onEditTask}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
