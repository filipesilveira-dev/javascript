import { useState } from "react";

export default function useInput(initialValue = ""){
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        // o "?" indica 'se o value não for nulo, então faça o trim()'
        setValue(e.target.value);
    }

    const clean = () => setValue("");

    return{
        value,
        onChange,
        clean
    };
}