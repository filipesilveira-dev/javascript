function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('cont');
   
    var res = window.document.getElementById('res');//não será necessário transformar em número, pois não será manipulado como tal

    if(inicio.value.length == 0 ||fim.value.length == 0 ||passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
        //res.innerHTML= 'Impossível contar'
    } else {
       res.innerHTML ='Contando: '
       let i =Number(inicio.value)// variável criada para transformar o conteúdo recebido na variável "inicio" para número
       let f =Number(fim.value)// variável criada para transformar o conteúdo recebido na variável "fim" para número
       let p =Number(passo.value)// variável criada para transformar o conteúdo recebido na variável "passo" para número

        if(p<=0){
            window.alert ('Passo inválido. Considerando PASSO = 1')
            p = 1
        }
       if(i<f){
        //contagem crescente
            for(let c= i; c<=f; c+= p){ 
                //é estabelecida no início uma nova variável (let ou var c) para representar o início. Logo é atribuído o valor da i, a qual receberá o valor digitado pelo usuário, indicando onde iniciará a contagem.
                //a mesma variável i estabelecida no início é comparada à variável f, a qual representa o valor final inserido pelo usuário
                // o += significa que, a cada repetição, a variável contadora é igua ao seu valor mais o valor da variável p(passo )
                res.innerHTML += `${c} \u{1f449}`
                //em cada repetição do laço, o texto do elemento div com id="res" será substituído pelo valor da variável c seguido por um emoji escolhido
            }       
        } else{
        //contagem decrescente
            for(let c= i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } 
        res.innerHTML += '\u{1f3c1}' //insere o emoji de bandeira final independente de ser uma contagem crescente ou decrescente
    }             
}
    
