import useInput from "../hooks/useInput";

export default function AddTask({ onAddTask }) {
  // REMOVIDO AO INSERIR O USEINPUT // constante criada para receber o valor do input com o nome da tarefa
  // const [newTask, setNewTask] = useState("");

  // Recebe o objeto literal retornado peo useInput
  const task = useInput();

  //   Objetivos da função: prevenir recarregamento da página, validação simples, impedindo a inserção de tarefas sem nada escrito e adicionar a tarefa à lista preexeistente
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página
    e.preventDefault();

    // Validação: utiliza o useState do useInput
    if (task.value.trim() === "") return;

    // Envio de formulário e renderização: utiliza o useState do Inpute e passa como parâmetro da função
    onAddTask(task.value.trim());
    
    // REMOVIDO AO INSERIR O USEINPUT setNewTask("");
    // Função de limpeza obtida de useInput
    task.clean();
  };

  return (
    <>
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
    </>
  );
}
