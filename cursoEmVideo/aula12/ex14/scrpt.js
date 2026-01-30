function carregar(){ //função que será chamada no momento em que a página for carregada por meio do comando 'onload="carregar()"' estabelecido no elemento body do arquivo de HTML
    var msg = window.document.getElementById('msg')
    //variável estabelecendo relação com a <div> na qual aparecerá uma mensagem condizente com o horário
    var img = window.document.getElementById('imagem')
    //variável que estabelece relação com a <div> a qual mostrará imagem de acordo com o horário do dia
    var data = new Date()
    var hora = 18//data.getHours()
    //variáveis para rebecer o horário atual do sistema
    msg.innerHTML=`Agora são ${hora} horas.`
    //esse comando alterará o texto interno da <div> com id="msg" para o que está entre aspas (``). Lembrando que as aspas são para possibilitar a inserção de um placeholder contendo a variável "hora" obtida por do sistema
    if (hora>5 && hora<12) {
        img.src = 'imagens/manha.png'
        //estabelece d qual fonte (source) será obtida a imagem dentro dessa condição de horário (entre 5h e 12h - manhã)
        document.body.style.background = '#e2cd9f'
        //condicional inserida para estabelecer os diferentes cenários possíveis diante da mudança de horas ao longo do dia
        document.body.style.transition ='1s'
        //comando extra utilizado para suavizar a transição de estilos
    } else if (hora>12 && hora<18){
        img.src = 'imagens/tarde1.png'
        //provavelmente a imagem tenha ficado oval por ter sido escolhida uma de orientação retrato. Algo a se atentar nas próximas vezes
        document.body.style.background ='#b9846f'
        document.body.style.transition ='1s'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background ='#515154'
        document.body.style.transition ='1s'
    }
}