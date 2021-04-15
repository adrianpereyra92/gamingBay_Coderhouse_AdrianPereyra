import React from 'react';
import '../Login/Login.css';

export default function Login(props){

    return(
        
            <form className="container-form">
                <h2>Login</h2>
                <input onChange={props.inputChange} className="container-form__input" name="emailInput" type="text" placeholder="Ingresa tu Email" />
                <input onChange={props.inputChange} className="container-form__input"  name="passwordInput" type="password" placeholder="Ingresa tu contraseña"/>
                <button className="container-form__button">Ingresar</button>
            </form>
        
    )
}