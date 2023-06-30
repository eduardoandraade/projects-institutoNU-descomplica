import React, { useState, useEffect } from "react";
import { useThemeContext } from "./App";

const Assento = (props) => {
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setDisabled(true);
    }

    useEffect(() => {
        console.log('Componente nasceu!')
    }, []);

    useEffect(() => {
        if (disabled) {
           console.log('Disabled alterado para:', disabled) 
        }
        
    }, [disabled]);

    const value = useThemeContext();

    return (
        
            <button
            className="assento"
            type="button"
            disabled={disabled}
            onClick={ () => handleClick()}
            >
                { disabled ? 'x' : <span style={{ color: value.color, fontFamily: value.font}}>{props.position}</span> }
            </button>
        )
    }
        
    

const Fileira = (props) => {
    return (
        <div className='fileira'>
            {[0, 1, 2, 3].map((position, index) => {
                return (
                    <Assento key={index} position={props.de + position} />
                )
            })}
        </div>
    )
}

export const AssentosBus = () => {
    return (
        <div className='container'>
            {[1 , 5, 9, 13, 17].map((position, index)=> {
                return (
                   <Fileira key={index} de={position} /> 
                )
            })}
        </div>
    )
}