import React from 'react';





function Laptops({ post }) {
    

    return (
        <div className="item-card">
          
          <div className="card" >
          <img className="game-cover"src={post.cover} alt="" />
          <div className="card-body">
          <p className="card-text">Laptop {post.brand}</p>
          <button type="button" className="btn btn-success" >Ver detalles</button>
        </div>
      </div>
        </div>
    );
}

export default Laptops;