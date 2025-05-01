// Estabelecendo as variáveis fora de função. Dessa forma podem ser utilzadas por qualquer uma das funções presentes
let num = window.document.getElementById('num')
//let n = Number(num.value)
let lista = document.getElementById('lnum')
let res = window.document.getElementById('res')
let valores = []

// Função criada para validar apenas números entre 1 e 100. Ao utilizar Number(), a linha de código já transforma a string "num", inserida como parâmetro lá na condicional (if) função adicionar(), ficando Number(num.value) - essa útlima parte fica subentendida nas linhas de código.
function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){ // função recebe dois parâmetros
    // indexOf: comando para encontrar a posição de determinado parâmetro (dentro do parênteses, no caso Number(num.value) ou Number(n)) em um vetor (vetor valores, no casos)
    if(l.indexOf(Number(n)) !=-1){ // o -1 indica que o valor não foi encontrado na lista
    // Se o número inserido (Number(n)) for diferente de menos um, então ele estará na lista, retornando verdade para esta função (importante lembrar que, na condicional da função adicionar(), a condicional se refere à negativa desta função (!=inLista())
        return true
    } else {
        return false
    }
}

function adicionar(){   
    if(isNumero(num.value) && !inLista(num.value, valores)){ // duas funções criadas para validar o valor inserido como um número e como não pertencente à lista. Se uma das duas condicionais for falsa, a condicional inteira será por conta do &&.
        valores.push(Number(num.value)) // adiciona o num, transformando em número por meio de Number(), ao vetor "valores"
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''            
    } else { // caso uma das duas ou as duas condicionais (número entre 1 e 100 e número fora da lista) seja falsa, retorna o alerta abaixo
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' // linha que "apaga" o número digitado do input com id="num"
    num.focus()// função que apresenta (foca) o cursor no elemento com id="num", evitando que o usuário precise clicar sempre que queira acrescentar outro número
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p><br>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p><br>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p><br>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p><br>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}

