import React from 'react';

export default function Visualizer(props){
    return(
        <div>
            <h1>El E-mail ingresado es: {props.email}</h1>
            <h1>La contraseña ingresada es: {props.password}</h1>
        </div>
    )
}