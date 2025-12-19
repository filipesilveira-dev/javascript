import { useState } from "react";
import AddTask from "../components/AddTask";
import Task from "./Task";

export default function ToDoList() {
  const [tasks, setTasks] = useState(
    {
      id: 1,
      title: "surfar",
      description: "acordar cedo pra ir surfar",
      isCompleted: false,
    },
    {
      id: 2,
      title: "estudar",
      description: "acordar cedo pra estudar",
      isCompleted: false,
    }
  );

  return (
    <>
      {/* componente responsável pelas tarefas adicionadas */}
      <AddTask />
      {/* componente responsável pelas tarefas que aparecem para o usuário */}
      {tasks.map((task) => 
        <Task title={task.title} />
      )}
    </>
  );
}
