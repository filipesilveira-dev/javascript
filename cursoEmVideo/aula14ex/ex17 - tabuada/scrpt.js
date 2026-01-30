function tabuada(){
    var num = document.getElementById('num')
    var n = Number(num.value)
    var res = document.getElementById('res')
    
    if(num.value.length == 0){
        window.alert('Digite um número')
    } else{

        tab.innerHTML =''//a inserção dessa linha funciona como um limpador de tela. Ou seja, quando inserir um novo número, o elemente select com id="tab" será esvaziado. A linha estabelece o elemento como vazio antes de ser preenchido novamente. Caso contrário, as tabuadas se acumularão indefinidamente.

        for(var c = 1; c<=10; c++) {
            var item = document.createElement('option')//cria um elemento option por meio de javascript. Como está sendo utilizado o elemento <select> e se deseja que a tabuada seja gerada dentro dele, é necessário criar as <options> que são as opções que aparecem dentro de uma lista de select. Necessária a criação de uma variável pois receberá valor inserido pelo usuário
            item.text = `${n} X ${c} = ${n*c}`//mostra o texto que será apresentado em cada <option>. Aqui é realizada a multiplicação da tabuada. Para isso, é preciso que as variáveis tenha sido transformadas em números 
            item.value = `tab${c}`//atribuição de uma value a cada option. Mais necessário ao se utilizar linguagens como PHP
            tab.appendChild(item)// adiciona o elemento filho "item", criado par receber os números, no elemento pai "tab"
            
            
            //res.innerHTML += (`${n} X ${c} = ${n*c} <br>`)
            //o cálculo da tabuada está sendo feito em ${n*c}, onde será multiplicado o número digitado e cada novo valor da variável c
            // o "+=" é essencial para manter os outros resultados em tela. Caso contrário, um irá se sobrepor ao outro, apresentando ao final apenas o último resultado.
        }
    } 

    
}

    