import React from 'react';
import '../Containers/ItemListContainer.css';


export default function ItemListContainer(props){

    return(
        <div className="container-home">
            
            <h1 className="saludo">{props.saludo}</h1>
        </div>
    )
}