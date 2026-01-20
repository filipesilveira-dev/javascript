import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  //aqui pode ser criado o estado geral da tarefa e ao invés de "isLogged" ser "isCompleted"
  const [user, setUser] = useState({ name: null, isLogged: false });
  return (
    <main>
      <h1>Lista de Tarefas</h1>
      {/* renderização condicional: se user.isLogged for verdade, ou seja, se oi usuário estiver logado, então será renderizado o <ToDoList/>, se for falso, o componente <Login/> que será renderizado */}
      {user.isLogged ? <ToDoList /> : <Login />}
    </main>
  );
}

export default App;
