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

  // Função para mudar o estado de conclusão de uma tarefa, aplicando !task.isCompleted na tarefa com id idêntico ao id passado como argumento
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

  function onAddTaskSubmit(title) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-purple-500 p-6 flex flex-col items-center">
      <div className="w-125 flex flex-col gap-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          To-do List
        </h1>
        <AddTask 
        onAddTaskSubmit={onAddTaskSubmit} />
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
