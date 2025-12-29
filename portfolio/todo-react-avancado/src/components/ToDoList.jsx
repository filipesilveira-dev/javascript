import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

export default function ToDoList() {

  const API_URL = 'https://crudcrud.com/api/7a48c0b484c94817ae273a0059549717/tasks'
  
  // useState aceita apenas um valor. Para simular uma lista de objeto é preciso criar uma array ([]) e colocara cada objeto dentro
  const [tasks, setTasks] = useState([]);

  // Busca os dados na API quando o componente for montado
  useEffect(()=>{
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>setTasks(data))
    .catch(error=>console.error("Falha ao buscar tarefa", error));
  },[])

  return (
    <>
      {/* componente responsável pelas tarefas adicionadas. Passadas as propriedades para alterar o useState "tasks" */}
      <AddTask  setTasks={setTasks} tasks={tasks} apiUrl={API_URL}/>
      {/* componente responsável pelas tarefas que aparecem para o usuário */}
      {tasks.map((task) => 
        <Task key={task._id} title={task.title} />
      )}
    </>
  );
}
