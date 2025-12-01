import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App() {

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      {/* componente Tasks */}
      <Tasks />
      {/* componente AddTask */}
      <AddTask />
    </div>
  )
}

export default App
