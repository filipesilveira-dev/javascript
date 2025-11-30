import { useState } from "react";
import Tarefa from "./components/Tarefa"


function App() {
  // inicialamente uma array, posteriormente transformada em setState. Perceba que foi passada o que era a array "tarefas" dentro do argumento de useStaete. A transformação foi feita para tornar possível adicionar e remover tarefa de UI.
  const [tarefas, setTarefas] = useState([
    // aqui está simulado um pequeno banco de dados, possuindo cada objeto ou item da lista um id único. Dessa forma, a propriedade "key" pode identificar acada um individualemnte. 
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Fazer compras" },
    { id: 3, texto: "Responder e-mails" }
  ]);

  const [novaTarefa, setNovaTarefa] = useState('');

  // função para receber o submit (evento em questão) do input
  const handleSubmit = (e) => {
    // evita o recarregamento completo da página. Pelo fato do evento (e) ser um "submit", seu comportamento padrão é recarregar a página. Por isso o uso do preventDefault().
    e.preventDefault();

    // trata-se de uma pequena validação. Caso não haja nada escrito para ser feito o "submit" será retornado nada também para o usuário.
    if (novaTarefa.trim() === '') return;

    // como os objetos de "tarefas" possuem id e texto {id: valor, texto: valor}, será simulada a criação de um id. Nesse caso, o novo id será o id do último elemento [tarefas.length - 1] da lista mais "1".
    const novoId = tarefas[tarefas.length - 1].id + 1;

    // função para criar uma nova tarefa
    const nova = {
      // obtido com "const novoId"
      id: novoId,
      texto: novaTarefa.trim()
    }
    // recupera toda a lista "tarefas" atuais com o spread operator (...) e acrescenta a nova lista no final
    setTarefas([...tarefas, nova]);
    // apaga o texto do input
    setNovaTarefa('');
  }

  return (
    <main>
      <h1>To-Do List App</h1>
      {/* atrela o "submeter do formulário à função "handleSubmit" */}
      <form onSubmit={handleSubmit}>
        {/* o uso da propriedade value no input serve para utilizar o setState "novaTarefa" definido como iniciando com duas aspas vazias (''), ou seja, sem nada escrito inicialmente */}
        <input type="text" placeholder="Digite uma nova tarefa" value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)} />
          {/* no caso acima em "onChange" o evento (e) será passado como argumento na arrow function na qual será retornado o valor desse evento, ou seja, o que será escrito no input*/}
          <button type="submit">Adicionar</button>
      </form>
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

/*
1 - Quando for escrita uma nova tarefa no submit e clicado em adicionar, será disparado o evento "onSubmit"
2 - Em seguida, será rodada a função "handleSubmit"
3 - Dentro de "handleSubmit", será prevenido o recarregamento da página e verificado se não está em branco.
4 - Em seguida será pego um "id" provisório
5 - Gera-se um objeto {id: valor, texto: valor} da nova tarefa
6 - Por meio de "setTarefas([...tarefas, nova]);", cria-se um novo array com a tarefa nova
7 - Alista (array) "tarefas é então atualizada com a nova tarefa", o que implica na <ul> na qual foi passada uma função map() para percorrer a lista. Isso renderizará na UI a nova array criada com a nova tarefa
*/
export default App
