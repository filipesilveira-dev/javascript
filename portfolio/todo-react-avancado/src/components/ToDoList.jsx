import { useCallback, useContext, useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { UserContext } from "../contexts/UserContext";

export default function ToDoList() {
  const API_URL =
    "https://crudcrud.com/api/c1c234e948da4ff6858dad039d83d33d/tasks";

  // useState aceita apenas um valor. Para simular uma lista de objeto é preciso criar uma array ([]) e colocara cada objeto dentro
  const [tasks, setTasks] = useState([]);

  // Uso do useContext para receber o usuário que está utilizando a aplicação
  const { user } = useContext(UserContext);

  // useState criado para controlar o filtro aplicado nas tarefas
  const [filter, setFilter] = useState("all");

  // Constante que recebe o array com tasks depois de filtro aplicado pelo usuário. Utilizado com map() no momento de renderizar <Task />
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "pending") return !task.isCompleted;
    return true;
  });

  console.log("Componente ToDoList executado");

  useEffect(() => {
    console.log("Componente montado");
  }, []);

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

  const addTask = (title) => {
    // Envio da tarefa para a API. O nome do usuário vem do useContext estabelecido lá em App. O nome do usuário está salvo em "name", logo para resgatá-lo aqui será necessário o "user.name"
    const nova = { user: user.name, title, isCompleted: false };

    fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nova),
    })
      .then((res) => res.json())
      .then((createdTask) => {
        setTasks((prev) => [...prev, createdTask]);
        console.log("Tarefa adicionada com sucesso!");
      })
      .catch((error) => console.error("Falha ao buscar tarefa", error));
  };

  // A função de deletar foi movida para o componente ToDoList para evitar a passagem do estado completo de tasks via props. Ao utilizar useCallback, garante-se que a referência da função deleteTask seja preservada entre os re-renders do ToDoList. Isso não impede que o componente pai seja re-renderizado quando o estado muda, mas evita que os componentes Task, que estão memorizados com memo, sejam re-renderizados desnecessariamente apenas por causa da recriação da função. Dessa forma, apenas o item efetivamente removido deixa de ser exibido, enquanto os demais componentes permanecem intactos, resultando em uma renderização mais eficiente.
  const deleteTask = useCallback((id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        // uso de callback evitando adicionar o array tasks (utilizado "prev" no lugar. Versão anterior logo abaixo)
        setTasks((prev) => prev.filter((task) => task._id !== id));
        //setTasks(tasks.filter((task) => task._id !== id));
        console.log("Tarefa deletada com sucesso!");
      })
      .catch((error) => {
        console.error("Falha ao deletar tarefa", error);
        alert("Não foi possível deletar a tarefa.");
      });
  }, []);

  // função criada para alterar a propriedade isCompleted da task clicada como concluída
  const changeTaskStatus = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  };

  return (
    <>
      {/* componente responsável pelas tarefas adicionadas. Passadas as propriedades para alterar o useState "tasks" */}
      <AddTask
        // REMOVIDO setter para manipular o estado de tasks, adicionando task
        // setTasks={setTasks}
        // REMOVIDO utilizado para salvar tarefa no servidor de API
        // apiUrl={API_URL}
        onAddTask={addTask}
      />

      {/* Alternativa ao select
      
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>

        <button onClick={() => setFilter("completed")}>Concluídas</button>

        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div> */}

        <div>
          <select value={filter} onChange={(e)=>{setFilter(e.target.value)}}>
            <option value="all"> Todas </option>
            <option value="completed"> Concluídas </option>
            <option value="pending"> Pendentes </option>
          </select>
        </div>

      {/* componente responsável pelas tarefas que aparecem para o usuário */}
      {/* map() feito em filteredTasks: só aparecerão as tarefas que passarem pelo filtro */}
      {filteredTasks
        // filtra apenas as tarefas em que o nome do usuário salvo no ato de adicionar a tarefa seja igual ao nome do usuário do login no momento
        .filter((task) => task.user === user.name)
        .map((task) => (
          <Task
            key={task._id}
            // REMOVIDO (DESNECESSÁRIO APÓS MUDANÇA DA FUNÇÃO DE DELETAR PARA CÁ) setter para manipular o estado de tasks, excluindo task
            // setTasks={setTasks}
            // REMOVIDO (PROBLEMA DE PERFORMANCE) trata-se do estado inteiro de todas as tarefas. Utilizado no filter(0 para remover a tarefa da tela)
            // tasks={tasks}
            // criado pelo método map() abrange todas as características de UMA tarefa (_id e title). Trata-se de uma variável temporária. Representa cada item da array durante a iteração. Utilizado em filter() para comparar o _id da tarefa em questão com o id recebido como argumento da função "deleteTask".
            task={task}
            // REMOVIDO (DESNECESSÁRIO QUANDO A FUNÇÃO DE DELETAR VEIO PARA CÁ) utilizado para deletar tarefa do servidor de API
            // apiUrl={API_URL}
            onDeleteTask={deleteTask}
            onChangeTaskStatus={changeTaskStatus}
          />
        ))}
    </>
  );
}
