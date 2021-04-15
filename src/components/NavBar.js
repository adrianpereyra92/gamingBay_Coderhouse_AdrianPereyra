import React from 'react';
import './NavBar.css';

export default function NavBar(){

    return(
        <div className="container-nav">
            <h1 className="brand-name">Gaming Bay</h1>
            <ul class="nav-ul">
                <li class="nav-item">
                    <a class="nav-link" href="a">INICIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="a">NOVEDADES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="a">CATEGORIAS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="a">CONTACTO</a>
                </li>
            </ul>    
        </div>
    )
}