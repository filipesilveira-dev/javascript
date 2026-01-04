import { useState, useEffect, memo } from "react";

function Task({ setTasks, tasks, task, apiUrl }) {
  // constante que recebe o useState que controlará o estado de concluída da tarefa
  const [completed, setCompleted] = useState(false);

  useEffect(()=>{
      console.log("Componente Task executa", task)
    }, [task])

    console.log("Componente Task executado", task)

  // função criada para alterar o estado da tarefa. Estabelece o valor booleano inverso do que estava antes. Ela é chamada com o evento de "onClick" (por se tratar de um button, mas se fosse um <input>, seria um "onChange") na tarefa selecionada (cada tarefa tem o pr´órpio "onChange")
  const changeCompleted = () => {
    setCompleted(!completed);
  };

  const deleteTask = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        setTasks(tasks.filter((task) => task._id !== id));
        console.log("Tarefa deletada com sucesso!");
      })
      .catch((error) => {
        console.error("Falha ao deletar tarefa", error);
        alert("Não foi possível deletar a tarefa.");
      });
  };

  return (
    <li>
      {/* arrow function desnecessária por não possuir parâmetro */}
      <button onClick={changeCompleted}>
        <span className={completed ? "line-through" : " "}>{task.title} </span>
      </button>
      {/* necessário o uso de arrow function em deleteTask por necessitar de um parâmetro (task._id) */}
      <button onClick={()=>{deleteTask(task._id)}} className="hover:cursor-pointer">
        Remover
      </button>
    </li>
  );
}

export default memo(Task)