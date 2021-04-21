import React, {useState} from 'react';
import '../../components/ItemCount/ItemCount.css';

export default function ItemCount(){
    const [pedido, setNumber] = useState(1);
    let stock = 5;

    function onIncrement(){
        setNumber(pedido > stock ? pedido : pedido +1);
    }

    function onDecrement(){
        setNumber(pedido <= 0 ? 0 : pedido - 1);
    }

    return (
        <div className="counter">
            
                <button className="btn"onClick={onDecrement}>-</button>
                <div type="button"> {stock >= pedido ? (
                <div>{pedido}</div>) : (<div>Sólo disponible {stock} unidades</div>)}</div>
                <button className="btn"onClick={onIncrement}>+</button>
            
        </div>
    )
}

