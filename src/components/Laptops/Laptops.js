import React from 'react';

import { useHistory } from 'react-router-dom'

function Laptops({ post }) {
    
  let history = useHistory();


    return (
        <div className="item-card">
          
          <div className="card" >
          <img className="game-cover"src={post.cover} alt="" />
          <div className="card-body">
          <p className="card-text">Laptop {post.brand}</p>
          <button type="button" className="btn btn-success" onClick={() => history.push("/laptops/:laptopdetails")} >Ver detalles</button>
        </div>
      </div>
        </div>
    );
}

export default Laptops;