import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

export default function ToDoList() {
  const API_URL =
    "https://crudcrud.com/api/f557eb8a062b41bc953476a18068026d/tasks";

  // useState aceita apenas um valor. Para simular uma lista de objeto é preciso criar uma array ([]) e colocara cada objeto dentro
  const [tasks, setTasks] = useState([]);

  // Busca os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => {
        console.error("Falha ao buscar tarefa", error);
        alert("Não foi possível carregar as tarefas. Altere o endpoint.");
      });
  }, []);

  return (
    <>
      {/* componente responsável pelas tarefas adicionadas. Passadas as propriedades para alterar o useState "tasks" */}
      <AddTask 
      // setter para manipular o estado de tasks, adicionando task
      setTasks={setTasks} 
      // utilizado para salvar tarefa no servidor de API 
      apiUrl={API_URL} />

      {/* componente responsável pelas tarefas que aparecem para o usuário */}
      {tasks.map((task) => (
        <Task
          key={task._id}
          // setter para manipular o estado de tasks, excluindo task
          setTasks={setTasks}
          // trata-se do estado inteiro de todas as tarefas. Utilizado no filter(0 para remover a tarefa da tela)
          tasks={tasks}
          // criado pelo método map() abrange todas as características de UMA tarefa (_id e title). Trata-se de uma variável temporária. Representa cada item da array durante a iteração. Utilizado em filter() para comparar o _id da tarefa em questão com o id recebido como argumento da função "deleteTask".
          task={task}
          // utilizado para deletar tarefa do servidor de API
          apiUrl={API_URL}
        />
      ))}
    </>
  );
}
