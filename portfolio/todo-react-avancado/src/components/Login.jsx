import useInput from "../hooks/useInput"

export default function Login(){
    const userName = useInput

const handleLogin = (e)=>{
    e.preventDefault();
    //validar
    //gravar usuário
}
    return(
        <form>
            <input type="text" 
            placeholder="Digite seu nome"
            value={userName.value} 
            onChange={userName.onChange}/>
            <button type="submit"></button>
        </form>
    )
}