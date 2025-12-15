// Aqui será o componente que terá as tarefas. A estilização de cada tarefa mostrada será aqui. À medida que novas tarefas forem criadas, elas aparecerão aqui
import { Trash2 } from 'lucide-react';

function Tasks(props) {
  return (
    <ul className="space-y-4 bg-purple-200 rounded-md shadow p-6">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button className="bg-purple-400 text-black p-2 rounded-md w-full text-left">
            {task.title}
          </button>
          <button className="bg-purple-400 text-black p-2 rounded-md">
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
