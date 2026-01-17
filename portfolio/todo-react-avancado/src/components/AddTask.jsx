import { useState } from "react";
import useInput from "../hooks/useInput";

export default function AddTask({ onAddTask }) {
  // constante criada para receber o valor do input com o nome da tarefa
  // const [newTask, setNewTask] = useState("");
  const task = useInput();

  //   Objetivos da função: prevenir recarregamento da página, validação simples, impedindo a inserção de tarefas sem nada escrito e adicionar a tarefa à lista preexeistente
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    if (task.value.trim() === "") return;

    // o "trim()" está sendo feito lá pelo useInput
    onAddTask(task.value.trim());
    
    //setNewTask("");
    task.clean();
  };

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={task.value}
          //   captura o evento como argumento da arrow function e vai estabelecer a variável nexTask com o valor gerado no input em específico
          onChange={task.onChange}
        />
        <input type="text" />
        <button type="submit" className="hover:cursor-pointer">
          Adicionar
        </button>
      </form>
    </main>
  );
}
