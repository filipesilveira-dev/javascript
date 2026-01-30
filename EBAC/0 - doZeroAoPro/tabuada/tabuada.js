function calcular(){
    var num = document.getElementById("num")
    var n = Number(num.value)
    var res = document.getElementById('res')

    if(num.value.length == 0){
        window.alert('Digite um número!')
    } 

    res.innerHTML = ''
    for(var i = 1; i<=10; i++){
        res.innerHTML += `${n} x ${i} = ${n*i} <br>`
        res.style.border = '1px, solid, black'
        res.style.borderRadius = '10px'
    }

       
}

function limpar(){
    location.reload() // comando atualiza a página, limpanda o que havia antes
    /*res.innerHTML = 'Digite um número acima'
    res.style.border = 'none'*/
}