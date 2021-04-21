import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar(){

    return(
        <div className="container-nav">
            <h1 className="brand-name">Gaming Bay</h1>
            <ul className="nav-ul">
                <li className="nav-item">
                    <a className="nav-link" href="a">INICIO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="a">NOVEDADES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="a">CATEGORIAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link-login" href="a">INGRESAR</a>
                </li>
            </ul>    
            <CartWidget />
        </div>
    )
}