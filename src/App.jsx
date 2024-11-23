import { TaskContext } from "./contexts";
import Header from "./Header";
import ProjectBoard from "./projectBoard/ProjectBoard";
import SideBar from "./SideBar";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    toDo: [],
    onProgress: [
      
    ],
    done: [],
    revise: [],
  });
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <TaskContext.Provider value={{ data, setData }}>
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />
            <ProjectBoard />
          </main>
        </TaskContext.Provider>
      </div>
    </>
  );
};

export default App;
