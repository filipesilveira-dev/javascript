function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//vai pegar o ano completo e não só o 25
    var fano = document.getElementById('txtano')//variável referente ao ano inserido pelo usuário no formulário 
    var res = document.getElementById('res')//estabelece relação com o elemento <div> no qual será mostrado o resultado
    
    if(fano.value.length == 0 || Number(fano.value)> ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')// mensagem de validação, permitindo apenas anos diferentes de zero caracteres e maiores que o ano atual do sistema
    } else {
        var fsex = document.getElementsByName('radsex')// em casos de "elements", no plural, há o parâmetro entre [] que indaica a qual se refere, começando com o '0', o qual indica ser o primeiro termo
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}.`
        var genero=''//variável vazia
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        //as duas linhas de código acima criam, por meio do JavaScript (createElement) um elemento imagem ('img') com o atributo id="foto" (setAttribute('id','foto'))

        if(fsex[0].checked){ // condicional caso seja marcado o primeiro [0] "fsex" com o name="radsex" referente ao sexo "Masculino"
            genero = 'homem'// indica que a variável 'genero', antes vazia, recebe o valor "homem", o qual será utlizado mais a frente no códifo para aparecer no innerHTML da <div> com id="res"
            if(idade>=0 && idade<3){
                //estabelece as condicionais da variável idade para considerar como bebê (vale para todos os outros casos)
                img.setAttribute('src','imagens/bb.png')// estabelece que, ao preencher o critério etário para bebê, a img inserida por meio do document.createElement('img') ganha o atributo src='imagens/bb.png', apresentando uma imagem previamente baixada de um bebê juntamente com a alteração no innerHTML estabelecida mais para o final do código (vale para todos os outros casos, fazendo a correspondência de cada imagem com cada idade)
            } else if (idade>=3 && idade<13){
                //criança
                img.setAttribute('src','imagens/menino.png')
            } else if (idade>=13 && idade<18){
                //adolescente
                img.setAttribute('src','imagens/adolescento.png')
            } else if (idade>=18 && idade<50){
                //adulto
                img.setAttribute('src','imagens/adulto.png')
            } else{ // estabelece que qualquer outra situação diferente das condições apresentadas será considerada uma pessoa idosa
                //idoso
                img.setAttribute('src','imagens/idoso.png')
            }
        } else if (fsex[1].checked){
            genero='mulher'
            if(idade>=0 && idade<3){
                //bebê
                img.setAttribute('src','imagens/bb.png')
            } else if (idade>=3 && idade<13){
                //criança
                img.setAttribute('src','imagens/menina.png')
            } else if (idade>=13 && idade<18){
                //adolescente
                img.setAttribute('src','imagens/adolescenta.png')
            } else if (idade>=18 && idade<50){
                //adulto
                img.setAttribute('src','imagens/adulta.png')
            } else{ 
                //idoso
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign ='center'//estabelece o estilo de texto centralizado dentro da função verificar para a <div> com id="res". Ou seja, ao se clicar no botão "verificar", o qual possui o atributo onclick (o "on" antes de click é por estar no arquivo HTML), o estilo da referida <div> se altera
        res.innerHTML=`Detectamos um(a) ${genero} com ${idade} ano(s)`//altera o texto interno do elemento HTML com id="res" para o especificado entre aspas(``). O uso das aspas se deve à opção pelos palceholders ${}, os quais apresentarão os valores das variáveis especificadas
        res.appendChild(img)//comando que adiciona no elemento especificado (div com id="res") a variável imagem(img) crida antes no código
        img.style.display='block'//estiliza o elemento para display block
        img.style.margin='auto'//juntamente com o display:block alinha o elemento img no centro do seu container
    }

}