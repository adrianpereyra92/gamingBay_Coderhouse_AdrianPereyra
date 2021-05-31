import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom'

export default function NavBar() {

  let history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={() => history.push("/")}>Gaming Bay</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <button type="button" className="btn btn-success">INGRESAR</button>
            <li className="nav-item">
              <a className="nav-link " href="/" onClick={() => history.push("/")}>INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="juegos" onClick={() => history.push("/juegos")}>JUEGOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="laptops" onClick={() => history.push("/laptops")}>LAPTOPS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="about" onClick={() => history.push("/about")}>ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget onClick={() => history.push("/cart")}/>
    </nav>
  )
}