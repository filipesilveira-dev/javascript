function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//vai pegar o ano completo e não só o 25
    var fano = document.getElementById('txtano')//variável referente ao ano inserido pelo usuário no formulário 
    var res = document.getElementById('res')//estabelece relação com o elemento <div> no qual será mostrado o resultado
    if(fano.value == 0 || fano.value> ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')// mensagem de validação, permitindo apenas anos diferentes de zero e maiores que o ano atual do sistema
    } else {
        var fsex =
    }

}