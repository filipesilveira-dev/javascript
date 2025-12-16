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

  // Função para mudar o estado aplicando !task.isCompleted na tarefa com id idêntico ao id passado como argumento
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  // Função para filtrar apenas as tarefas que possuem o id diferente do id passado como argumento
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-purple-500 justify-center p-6 ">
      <div className="w-125 m-auto">
        {/* <AddTask /> */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
