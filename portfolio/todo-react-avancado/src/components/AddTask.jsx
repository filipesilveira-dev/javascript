import { useState } from "react";

export default function AddTask({ setTasks, apiUrl }) {
  // constante criada para receber o valor do input com o nome da tarefa
  const [newTask, setNewTask] = useState("");

  //   Objetivos da função: prevenir recarregamento da página, validação simples, impedindo a inserção de tarefas sem nada escrito e adicionar a tarefa à lista preexeistente
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    if (newTask.trim() === "") return;

    // Envio da tarefa para a API
    const nova = { title: newTask.trim() };
    fetch(apiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(nova),
    })
      .then((res) => res.json())
      .then((createdTask) => {
        setTasks((prev) => [...prev, createdTask]);
        console.log("Tarefa adicionada com sucesso!");
        setNewTask("");
      })
      .catch((error) => console.error("Falha ao buscar tarefa", error));
  };

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          //   captura o evento como argumento da arrow function e vai estabelecer a variável nexTask com o valor gerado no input em específico
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input type="text" />
        <button type="submit" className="hover:cursor-pointer">
          Adicionar
        </button>
      </form>
    </main>
  );
}
