import React from 'react';
import './App.css';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/List/ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends React.Component {

  render(){
    
    return(
      
      <div className="main-container">
        <NavBar />
        <ItemListContainer saludo="Tus videojuegos favoritos, a un sólo click." />
        <ItemList />
      </div>
      
    )
  }
}

export default App;