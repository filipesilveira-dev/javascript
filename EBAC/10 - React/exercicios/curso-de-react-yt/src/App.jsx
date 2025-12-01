import { useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App() {
const [tasks, setTask] = useState([{
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


function onTaskClick(taskId){
  const newTasks = tasks.map((task)=>{
    // PRECISO ATUALIZAR ESSA TAREFA
    if(task.id === taskId){
      return {...task, isCompleted: !task,isCompleted};

    // NÃO PRECISO ATUALIZAR ESSA TAREFA
    return task;
    }
  })
}
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
           {/* componente AddTask */}
        <AddTask />
        {/* componente Tasks */}
        {/* tudo o que é passado aqui, é possível ter acesso no seu componente.jsx por meio de props. No exemplo a seguir, é dado acesso aos valores contidos na array "tasks" lá no componente Tasks*/}
        {/* também é possível passar função como props */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  )
}

export default App
