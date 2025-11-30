import { useState } from "react";
import Tarefa from "./components/Tarefa"


function App() {
  // inicialamente uma array, posteriormente transformada em setState. Perceba que foi passada o que era a array "tarefas" dentro do argumento de useStaete. A transformação foi feita para tornar possível adicionar e remover tarefa de UI.
  const tarefas = [
    // aqui está simulado um pequeno banco de dados, possuindo cada objeto ou item da lista um id único. Dessa forma, a propriedade "key" pode identificar acada um individualemnte. 
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Fazer compras" },
    { id: 3, texto: "Responder e-mails" }
  ];

  return (
    <main>
      <h1>To-Do List App</h1>
      <ul>
        {/* 
          função map() cria, para cada elemento de "tarefas" um componente <Tarefa />, do jsx, passando como argumento do texto o próprio elemento. Importante ressaltar que cada elemento aqui na função está sendo chamado de "tarefe", mas poderia ser substituído por "e" outra forma de se referir.
        */}

        {/* 
          A propriedade "key" é necessária pois funciona como um identificador único de cada elemento. Dessa forma, ao invés de precisar renderizar tudo caso algum texto mude, ele renderiza apenas o texto alterado. Funciona aliado ao "id" que geralmente é utilizado em bancos de dados para identificar cada objeto.
          Para referenciar então os objetos dentro da array tarefas, sendo cada objeto uma "tarefa", será necessário utilizar "tarefa.id" e "tarefa.texto"
        */}
        {tarefas.map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto} />)}
      </ul>
    </main>
  )
}

export default App
