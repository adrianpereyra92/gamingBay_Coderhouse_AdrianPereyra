import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
                <a className="navbar-brand" href="a">Gaming Bay</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <button type="button" class="btn btn-success">REGISTRATE</button>
        <li className="nav-item">
          <a className="nav-link " href="inicio">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="novedades">NOVEDADES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="ofertas">OFERTAS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="categorias">CATEGORÍAS</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget />
</nav>
    )
}