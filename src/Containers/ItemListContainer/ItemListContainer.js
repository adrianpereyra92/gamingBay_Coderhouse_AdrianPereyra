import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../../components/List/ItemList';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function ItemListContainer({ saludo }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
      fetch('http://www.json-generator.com/api/json/get/cfgmzJUvVK?indent=2', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setItems(data)
          console.log(data)
        });

    }, 
   []);

  return (
    
      <div className="item-list">
        <h2>Juegos disponibles</h2>
        <ItemList postsInput={items} />
      </div>
    
  )
}


