// Aqui estará o código para:
//      1 - Armazenar localmente
//      2 - Chamar localmente
//      3 - Chamada de API para montar e renderizar (método GET)
//      4 - A estrutura do formulário que cadastrará ou deletará a tarefa
import { useState } from "react";
import { useInput } from "../../../../exercicios/my-app/src/hooks/useInput";


function AddTask(){

    const task = useInput()
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center text-purple-100">Tarefas</h1>
            <form className="bg-amber-400" type='text' placeholder="Digite uma tarefa">
                <input type="text" 
                value={task.valor} 
                onChange={task.onChange} />
            </form>
        </div>
    )
}

export default AddTask