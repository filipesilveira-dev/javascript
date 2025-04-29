function contar(){
    var inicio = document.getElementById('inicio');// variáveis criadas para receber os valores inseridos (precisarão serem transformadas em números)
    var fim = document.getElementById('fim');
    var passo = document.getElementById('cont');
   
    var res = window.document.getElementById('res');//variável criada para alterear o elemento com id="res", no caso o texto interno (innerHTML)
    //não será necessário transformar em número, pois não será manipulado como tal

    if(inicio.value.length == 0 ||fim.value.length == 0 ||passo.value.length == 0){//condição pra a função funcionar adequedamente. Se o comprimento de qualquer dos valores (ou, ou, ou) inseridos for igual a zero, ou seja, não for preenchido, será retornada para o usuário a mensagem abaixo
        window.alert('[ERRO] Faltam dados')
        //res.innerHTML= 'Impossível contar'
    } else {// caso seja falsa a condicionala acima, então (else) será executado o código abaixo
       res.innerHTML ='Contando: '//texto no elemento com id="res" que será concatenado (+=) com a contagem. Ou seja, ao iniciar a contagem dentro do elemento com id="res", o texto antes presente n]ão some, permanece, sendo acrescentada a contagem ao lado
       let i =Number(inicio.value)// variável criada para transformar o conteúdo recebido na variável "inicio" para número
       let f =Number(fim.value)// variável criada para transformar o conteúdo recebido na variável "fim" para número
       let p =Number(passo.value)// variável criada para transformar o conteúdo recebido na variável "passo" para número

        if(p<=0){//condicional para que o contador seja maior que zero, pois senão não haverá contagem
            window.alert ('Passo inválido. Considerando PASSO = 1')//mensagem mostrada alertando que será considerado o valor do passo como 1, caso seja digitado 0 (lembrando que, caso fique algum campo vazio, será mostrada mensagem de erro dizendo que faltam dados)
            p = 1//estabelecido arbitrariamente o passa=1 e segue a contagem
        }
       if(i<f){//condicional caso seja uma contagem crescente necessária pois afeta o contador. Nesse caso será um contador acrescido do passo
        //contagem crescente
            for(let c= i; c<=f; c+= p){ 
                //é estabelecida no início uma nova variável (let ou var c) para representar o início. Logo é atribuído o valor da i, a qual receberá o valor digitado pelo usuário, indicando onde iniciará a contagem.
                //a mesma variável i estabelecida no início é comparada à variável f, a qual representa o valor final inserido pelo usuário
                // o += significa que, a cada repetição, a variável contadora é igua ao seu valor mais o valor da variável p(passo )
                res.innerHTML += `${c} \u{1f449}`
                //em cada repetição do laço, o texto do elemento div com id="res" será substituído pelo valor da variável c seguido por um emoji escolhido
            }       
        } else{//Caso não seja crescente, ou seja, caso seja decrescente o contador será decrescido do passo
        //contagem decrescente
            for(let c= i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } 
        res.innerHTML += '\u{1f3c1}' //insere o emoji de bandeira final independente de ser uma contagem crescente ou decrescente
    }             
}
    
