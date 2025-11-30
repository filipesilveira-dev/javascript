// o componente Tarefa recebe um prop desestruturada (uso das "{}")

// uso do "useState para trazer interatividade"
import { useState } from "react";

//importa o css que servirá de estulização para quando a atividade for marcada como concluída
import './Tarefa.css';

//o texto virá de uma lista
function Tarefa({texto}){

    // estrutura básica do "useState": estado da tarefa (concluida), setState desse estado (setConcluida) e, por se tratar de um valor booleano (concluida = true e !concluida = false), o useState possuirá um valor inicial boolano (false), indicando que o estado inicia como não concluido. Se o estado envolvesse outro tipo de variável (número, como em um contador que inica no zero, ou string, como na atualização de um nome de usuário), o useState iniciaria com useState(0) ou useState(''), por exemplo;
    const [concluida, setConcluida] = useState(false)

    const alternarConcluida = ()=>{
        setConcluida(!concluida)
    }

    return(
        // em caso de mudança (onChange) será chamada a função "alternaConcluida", na qual "concluida", inicialmente falsa, ganha um novo valor sendo sua negação, ou seja, torna-se verdadeira. Dessa forma, o "className" também é afetado.
        // o "className" possui um operador ternário que estabelece uma classe "concluida" (recebendo a estilização do arquivo css) em caso de verdadeira e permanece sem classe em caso de falsa.
        <li><input type="checkbox" onChange={alternarConcluida}/><span className={ concluida? 'concluida' : ''}>{texto}</span> <button>Remover</button></li>
    )
}

//possibilita o uso da função fora do arquivo
export default Tarefa