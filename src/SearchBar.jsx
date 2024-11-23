import { useContext } from "react";
import { TaskContext } from "./contexts";
const SearchBar = () => {
  const { data, setData } = useContext(TaskContext);
  const handleSearchTask = (query) => {
    if (query) {
      setData({
        ...data,
        toDo: data.toDo.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        ),
        onProgress: data.onProgress.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        ),
        done: data.done.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        ),
        revise: data.revise.filter((task) =>
          task.title.toLowerCase().includes(query.toLowerCase())
        ),
      });
    } else {
      setData({ ...data });
    }
  };
  return (
    <div className="mx-4 flex-1">
      <input
        onChange={(e) => handleSearchTask(e.target.value)}
        type="text"
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
