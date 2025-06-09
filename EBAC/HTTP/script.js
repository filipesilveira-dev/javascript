//seleciona a <ul> com a lista de tarefas do HTML 
const tarefas = document.getElementById("listaTarefas");

//obs: "descricao" é a chave e seu valor é "Tarefa 1"

//utilizar o fecth para pegar (GET) as tarefas criadas no Crudcrud no exercício com postman
fetch("https://cafe17c542449caddf3c.free.beeceptor.com/api/tarefas/")
.then ((response) => response.json())
.then ((listaDeTarefas) =>{       //se der certo, será retornada uma array com várias tarefas

    //itera sobre cada tarefa do array. Para cada elemento (tarefa) de listaDeTarefas será executada o que está na arrow function
    listaDeTarefas.forEach(tarefa => { 

        //cria um novo elemento de lista (<li>) para cada tarefa
        const item = document.createElement("li");
        //define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button oclick="remove(${tarefa.id})">X</button>`;
        //adiciona o novo item à lista de tarefas no HTML
        tarefas.appendChild(item);
    });
})
.catch(error => console.error("Erro ao adicionar tarefa: ", error)); 

//criar o evento de cadastrar um nova atrefa
document.getElementById("add").addEventListener("click", () => {

    //seleciona o elemento HTML (id="terefa") de onde será recebido o valor ou informação que será acrescentada na lista de tarefas 
    const description = document.getElementById("tarefa").value;  
    
    //a URL será a mesma utilizada anteriormente no método GET, porém ao final será acrecentado um objeto e suas informações que serão acrescidas
    fetch("https://cafe17c542449caddf3c.free.beeceptor.com/api/tarefas/", {

        method: "POST", //método de acrescentar
        headers: {
            //objeto informa que o tipo de conteúdo que será passado é do tipo JSON
            "Content-Type" : "application/jason" 
        },
        //no body é o que será enviado, no caso um arquivo JSON. Dessa forma é utilizado o parâmetro estabelecido no postman (descricao) que fica na primeira posição dos parâmetros passados e, no segundo parâmetro, será passada a variável "description" criada para receber o valor do que há no elemento HTML com id="tarefa". Como se trata de um objeto em javascript, é necessário transformá-lo em JSON por meio do JSON.stringify().
        body: JSON.stringify({descricao: description}) 

    })
    .then (response => response.json())
    .then (tarefa => {

        //cria um novo elemento de lista (<li>) para cada tarefa
        const item = document.createElement("li");
        //define o conteúdo HTML do item, incluindo descrição e botão
        item.innerHTML = `${tarefa.descricao} <button oclick="remove(${tarefa.id})">X</button>`;
        //adiciona o novo item à lista de tarefas no HTML
        tarefas.appendChild(item);
    })
})


function remove(tarefaId){
    fetch(`https://cafe17c542449caddf3c.free.beeceptor.com/api/tarefas/${tarefaId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok){
            alert ("Usuário deletado!");
            response.json();
        } else {
            alert ("Não foi possível deletar o usuário")
        }
    })
    .then (data =>{
        if (data) {
            console.log('Resposta:', data);
        }
    })
    .catch(error => console.error("Erro ao deletar tarefa: ", error));
}
