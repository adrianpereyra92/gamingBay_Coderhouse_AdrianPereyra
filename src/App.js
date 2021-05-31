import React from 'react';
import './App.css';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Containers/HomePage/HomePage';
import ItemDetail from './components/ItemDetail/ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LaptopsContainer from '../src/Containers/LaptopsContainer/LaptopsContainer';
import Footer from './components/Footer/Footer';
import About from './Containers/AboutContainer/About'
import LaptopDetail from './components/Laptops/LaptopDetail';

class App extends React.Component {

  render() {

    return (

      <div className="main-container">
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/juegos" component={ItemListContainer} />
              <Route path="/juegos/:gamedetails" component={ItemDetail} />
              <Route exact path="/laptops" component={LaptopsContainer} />
              <Route path="/laptops/:laptopdetails" component={LaptopDetail} />
              <Route path="/about" component={About} />
            </Switch>
          <Footer />
        </Router>
      </div>

    )
  }
}

export default App;



