import { ChevronRightIcon } from "lucide-react"
// sendo o argumento "props" é possível este componente acessar informações que estão "acima" dele lá no App.jsx. Ou seja, o componente "Tasks" é filho do "App", pois é renderizado por este.
function Tasks(props) {
    return (
        // aqui é feito um map(), forEach, para cada elemento presente na array "tasks" com useState, exibindo uma lista
        // lembrando que o uso da "key" é essencial em listas no react
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex gap-2">
                    {/* arrow function executada ao ser clicado onde a função "onTaskClick", com o argumento da id da tarefa clicada */}
                    <button 
                    onClick={()=>props.onTaskClick(task.id)} 
                    className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                        {task.title}
                        </button>

                    <button className="bg-slate-400 p-2 rounded-md text-white">
                        {/* componente obtido por meio do "npm install lucide-react@0.435.0" */}
                        <ChevronRightIcon />
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Tasks