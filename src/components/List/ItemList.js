import React from "react";
import Item from "../List/Item";
import './ItemList.css';

export default function List({postsInput}) {
   
    return(
        <ul className="list">
            
            {postsInput && postsInput.map((post) => {
                return(
                    <Item key={post.id} post={post} />
                )
            })
            } 
        </ul>
    )   
}
            
    
