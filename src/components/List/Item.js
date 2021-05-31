import React from 'react';
import '../List/Item.css';
import { useHistory} from 'react-router-dom';

function Item({ post }) {
    
    let history = useHistory();

    return (
        <div className="item-card">
          <div className="card" >
            <img className="game-cover"src={post.cover} alt="" />
            <div className="card-body">
              <p className="card-text"> {post.title}</p>
              <button type="button" className="btn btn-success" onClick={() => history.push("/juegos/:gamedetails")} >Ver detalles</button>
            </div>
          </div>
        </div>
    );
}

export default Item;