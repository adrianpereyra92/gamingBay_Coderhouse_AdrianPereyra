import React from "react";
import Item from "../List/Item";
import './ItemList.css';

export default function List( postsInput ) {
    return(
        <ul className="list">
            {
                postsInput.map((item) => {
                    return(
                        <Item key={item.id} item={item} />
                        )  
                }   )
            }
        </ul>
    )
}









// import Item from './Item';
// import './ItemList.css';

// export default function List({postsInput}){
//     return(



