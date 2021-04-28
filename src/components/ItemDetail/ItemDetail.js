import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const onAdd = (counter) => {
    alert(`${counter} items have been added to the cart.`);
  };

  return (
        <div className="item-detail">
                <Img src={item.cover}/>
                <h2 className="item-detail--title">{item.title}</h2>
                <h2 className="item-detail--genre">{item.genre}</h2>
                <h2 className="item-detail--price">{item.price}</h2>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
    </div>
  );
}