import React from 'react';
import { useParams } from 'react-router';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

function ItemDetail({ post }) {
    const onAdd = (counter) => {
      alert(`${counter} Items añadidos al carrito.`);
    };

    
    return (
      <div className="item-card">
        <div className="card" >
          <img className="game-cover" src={post.cover} alt="" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">Género: {post.genre}</p>
            <p className="card-text">{post.price}</p>
            <ItemCount initial={1} stock={post.stock} onAdd={onAdd} />
            <button type="button" className="btn btn-success">Comprar</button> 
          </div>
        </div>
      </div>
  
  
  
  
    );
  }
  
  export default ItemDetail;
