import React from 'react';
import '../CartWidget/CartWidget.css';
import cart from '../../assets/icons/icons8-carrito-de-compras-24.png';

export default function CartWidget(){
    return(
            <div className="navbar-cart">
            <a href="icon">
                <img src={cart} className="cart-icon"  alt="Cart" />
            </a>
        </div>
    )
}