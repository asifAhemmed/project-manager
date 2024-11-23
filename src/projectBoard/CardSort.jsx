import { useState, useContext } from "react";
import { TaskContext } from "../contexts";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
const CardSort = () => {
  const { data, setData } = useContext(TaskContext);
  const [sortingOrder, setSortingOrder] = useState("asc");
  const handleSort = () => {
    if (sortingOrder === "asc") {
      setData({
        ...data,
        toDo: data.toDo.sort((a, b) => new Date(a.date) - new Date(b.date)),
        onProgress: data.onProgress.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
        done: data.done.sort((a, b) => new Date(a.date) - new Date(b.date)),
        revise: data.revise.sort((a, b) => new Date(a.date) - new Date(b.date)),
      });
      setSortingOrder("desc");
    } else {
      setData({
        ...data,
        toDo: data.toDo.sort((a, b) => new Date(b.date) - new Date(a.date)),
        onProgress: data.onProgress.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
        done: data.done.sort((a, b) => new Date(b.date) - new Date(a.date)),
        revise: data.revise.sort((a, b) => new Date(b.date) - new Date(a.date)),
      });
      setSortingOrder("asc");
    }
  };
  return (
    <>
      <button onClick={handleSort} className="text-2xl">
        {sortingOrder === "asc" ? <GoSortAsc /> : <GoSortDesc />}
      </button>
    </>
  );
};

export default CardSort;
