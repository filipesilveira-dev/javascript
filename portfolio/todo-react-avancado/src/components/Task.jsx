import { useState } from "react";

export default function Task({ title }) {
  // constante que recebe o useState que controlará o estado de concluída da tarefa
  const [completed, setCompleted] = useState(false);

  // função criada para alterar o estado da tarefa. Estabelece o valor booleano inverso do que estava antes. Ela é chamada com o evento de "onClick" (por se tratar de um button, mas se fosse um <input>, seria um "onChange") na tarefa selecionada (cada tarefa tem o pr´órpio "onChange")
  const changeCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      <button onClick={changeCompleted}>
        <span className={completed ? 'line-through' : " "}>{title} </span>
      </button>
      <button className="hover:cursor-pointer">Remover</button>
    </li>
  );
}
