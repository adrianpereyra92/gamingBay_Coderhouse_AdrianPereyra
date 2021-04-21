import React from 'react';
import './App.css';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';


class App extends React.Component {

  render(){
    return(
      <div className="container">
        <NavBar />
        <ItemListContainer saludo="Tus videojuegos favoritos, a un sólo click." name="Gaming Bay"/>
        <ItemCount />
        
      </div>
      
    )
  }
}

export default App;