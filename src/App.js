import React from 'react';
import './App.css';
import ItemListContainer from './components/Containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// import Login from './components/Login/Login';
// import LoginContainer from '../src/components/Containers/LoginContainer';
// import Visualizer from './components/Visualizer/Visualizer';

class App extends React.Component {

  render(){
    return(
      <div className="container">
        <NavBar />
        <ItemListContainer saludo="Tus videojuegos favoritos, a un sólo click." name="Gaming Bay"/>
        {/* <LoginContainer /> */}
        
      </div>
      
    )
  }
}

export default App;