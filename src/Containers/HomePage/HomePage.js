import React from 'react';
import Background from '../../assets/img/newBanner-bg.jpg';
import '../HomePage/HomePage.css';

export default function HomePage ({saludo}) {

    return(

        <div className="container-home">
            <img className="fondo" src={Background} alt="" />
            <h1 className="saludo">{saludo}</h1>
      </div>
    )
}