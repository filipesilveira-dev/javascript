// o componente Tarefa recebe um prop desestruturada (uso das "{}")
//o texto virá de uma lista
function Tarefa({texto}){
    return(
        <li><input type="checkbox" />{texto} <button>Remover</button></li>
    )
}

//possibilita o uso da função fora do arquivo
export default Tarefa