import { useEffect, useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar inglês",
    description: "Estudar inglês para se tornar fluente.",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar matemática",
    description: "Estudar matemática para se tornar um desenvolvedor full stack.",
    isCompleted: false
  }])


  // função para armazenar os valores de "tasks" quando ela for alterada (adicionado algum item o deletado).
  // o "useState" cria um efeito para quando o segundo parâmetro é alterado. O efeito então seria a função (arrow function) passada no primeiro parâmetro
  // ESSE RECURSO PRECISA ESTAR AQUI POIS O STATE (TASKS) ESTÁ AQUI
  useEffect(() => {

  }, [tasks]);

  // função para alterar o estado de conclusão de uma tarefa
  // ESSA FUNÇÃO PRECISA ESTAR AQUI POIS O STATE (TASKS) ESTÁ AQUI
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    // atualiza o state
    setTasks(newTasks);
  }

  // função para remover uma tarefa
  // ESSA FUNÇÃO PRECISA ESTAR AQUI POIS O STATE (TASKS) ESTÁ AQUI
  function onDeleteTaskClick(taskId) {

    // comando que especifica para manter na lista todas as tarefas com id diferente da tarefa que está sendo deletada. A lista que se originará desse comando conterá todas as tarefas menos a passada como argumento
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  // função para adicionar uma tarefa
  // ESSA FUNÇÃO PRECISA ESTAR AQUI POIS O STATE (TASKS) ESTÁ AQUI
  // recebe o title e o description como parâmentros, pois são os dois inputs em addTask
  function onAddTaskSubmit(title, description) {
    const newTask = {
      // é possível utilizar um gerador de id aleatório instalando o "uuid" no projeto via npm
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false
    };

    // o novo setState de tasks (setTasks) será tudo o que já tem em tasks acrescido da newTask
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        {/* componente AddTask */}
        <AddTask
          onAddTaskSubmit={onAddTaskSubmit}
        />
        {/* componente Tasks */}
        {/* tudo o que é passado aqui, é possível ter acesso no seu componente.jsx por meio de props. No exemplo a seguir, é dado acesso aos valores contidos na array "tasks" lá no componente Tasks*/}
        {/* também é possível passar função como props. No caso está sendo chamada a função "onTaskClick", alterando o estado de conclusão da tarefa */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App
