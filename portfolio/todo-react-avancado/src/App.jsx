import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { UserContext } from "./UserContext";
import Login from "./components/Login";

function App() {
  //aqui pode ser criado o estado geral da tarefa e ao invés de "isLogged" ser "isCompleted"
  // variável que será provida a componentes filhos sem o prop drilling (passada commo value no <UserContext.provider>)
  const [user, setUser] = useState({ name: null, isLogged: false });

  //Criar um estado geral de tarefa com {title, isCompleted: false} em ToDoList para utilizar tanto em ToDoList quanto em Task?

  return (
    // ETAPA 2: utilizar o "UserContext" com o provider, passando os valores que serão providos aos componentes, onde serão consumidos
    <UserContext.Provider value={{user, setUser}}>
      <main>
        {/* se user.name for verdadeiro, ou seja, existir, então use o template string. Se não, deixe sem nada. Dessa forma, o " - {user.name}" só aparece quando houver um usuário digitado */}
        <h1>Lista de Tarefas {user.name? `- ${user.name}` :""}</h1>
        {/* renderização condicional: se user.isLogged for verdade, ou seja, se oi usuário estiver logado, então será renderizado o <ToDoList/>, se for falso, o componente <Login/> que será renderizado */}
        {user.isLogged ? <ToDoList /> : <Login />}
      </main>
    </UserContext.Provider>
  );
}

export default App;
