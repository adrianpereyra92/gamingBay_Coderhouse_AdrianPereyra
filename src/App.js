import React from 'react';
import './App.css';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Containers/HomePage/HomePage';
import ItemDetail from './components/ItemDetail/ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LaptopsContainer from '../src/Containers/LaptopsContainer/LaptopsContainer';



class App extends React.Component {

  render() {

    return (

      <div className="main-container">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/inicio" exact>
              <HomePage saludo="Tus videojuegos favoritos, a un sólo click." />
            </Route>
            <Route path="/juegos" exact>
              <ItemListContainer />
            </Route>
            <Route path="juegos/:detail">
              <ItemDetail />
            </Route>
            <Route path="/laptops">
              <LaptopsContainer/>
            </Route>
            
          </Switch>
        </Router>
      </div>

    )
  }
}

export default App;



// <ItemListContainer saludo="Tus videojuegos favoritos, a un sólo click." />