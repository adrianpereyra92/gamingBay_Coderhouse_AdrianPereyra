import React, { useState, useEffect } from 'react';

import LaptopList from '../../components/Laptops/LaptopList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LaptopContainer () {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/bUmaddFIJe?indent=2', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((response) => response.json())
        .then ((data) => {
            setLaptops(data)
            console.log(data)
        });
},[])
    return (
        <div className="laptop-container">
            <h2>Selección de las mejores laptops del mercado</h2>
            <LaptopList postsInput={laptops}/>
        </div>
    
    
    
    
    )
}      