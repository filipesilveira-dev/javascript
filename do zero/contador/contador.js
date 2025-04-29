function contar(){
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')//atenção ao retomar os id's para serem iguais aqui
    var res = window.document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // validação evitando campo vazio
        alert ('[ERRO] Preencha todos os campos!')
    } else{
        res.innerHTML= 'Contando: ' // texto para aparecer no início antes de iniciar a contagem

        var i = Number(inicio.value) //transforma string em número
        var f = Number(fim.value) //transforma string em número
        var p = Number (passo.value) //transforma string em número

        if(p<=0){ // validação impedindo de utilizar o zero como contador 
            window.alert('Valor inválido. Considerando passo = 1')
            p=1
        }

        if(i<f){
            for(var c=i; c<=f; c+=p){
                res.innerHTML += ` ${c} -->` // atenção ao sinal += para manter o texto anterior, ou nesse caso, o número da contagem anterior
            } 
            } else{
                for(var c=i; c>=f; c-=p){ //altera tanto em relação ao fim (sinal de >= e o contador decresce --> c-=p)
                    res.innerHTML  += ` ${c} -->`
                }                
            }
            res.innerHTML += ' FIM' // atenção ao sinal += para manter o texto anterior
    }

}