import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Surfar",
      description: "Acordar cedo para ir surfar",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar",
      description:
        "Dedicar maior parte do tempo para estudo (assistir aula e fazer exercícios)",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-purple-500 justify-center p-6 ">
      <div className="w-125 m-auto">
        {/* <AddTask /> */}
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
