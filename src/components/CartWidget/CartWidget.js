import React from 'react';
import '../CartWidget/CartWidget.css';
import cart from '../../assets/icons/shopping_cart_white_24dp.svg';

export default function CartWidget(){
    return(
            <div className="navbar-cart">
            <a href="cart" >
                <img src={cart} className="cart-icon" alt="Cart" />
            </a>
        </div>
    )
}