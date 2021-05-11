import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../List/Item.css';

function LaptopDetail({ post }) {
    const onAdd = (counter) => {
      alert(`${counter} Items añadidos al carrito.`);
    };
  
    return (
      <div className="item-card">
        <div className="card" >
          <img className="game-cover" src={post.cover} alt="" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">Marca: {post.brand}</p>
            <p className="card-text">{post.price}</p>
            <ItemCount initial={1} stock={post.stock} onAdd={onAdd} />
            <button type="button" className="btn btn-success">Comprar</button> 
          </div>
        </div>
      </div>
  
  
  
  
    );
  }
  
  export default LaptopDetail;