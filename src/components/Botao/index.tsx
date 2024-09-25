import React from "react";
import Style from './Botao.module.scss';

interface Props{
    children?: React.ReactNode; 
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}

function Botao({onClick, type, children}: Props){
    return(
        <button onClick={onClick} type={type} className= {Style.botao}>
            {children}
        </button>
    )
}

export default Botao;