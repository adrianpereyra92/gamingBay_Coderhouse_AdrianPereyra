import React from "react";
import ItemCount from "../ItemCount/ItemCount";


function Item({ item }) {
  const onAdd = (counter) => {
    alert(`${counter} Items añadidos al carrito.`);
  };

  return (
    <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
  );
}

export default Item;

















// import React from 'react';

// export default function Item({post}){
//     return(
//         <div>
//             <li>Title:{post.id} </li>
//             <li>Username:{post.genre}</li>
//             <li>Cover:{post.cover}</li>
//         </div>
        
//     )
// }