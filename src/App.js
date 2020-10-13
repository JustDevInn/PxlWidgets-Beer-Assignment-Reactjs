import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from "./components/Nav";
import Home from "./components/Home";
import BreweryList from "./components/BreweryList";
import SearchBeers from "./components/SearchBeers";
import SingleBrewery from "./components/SingleBrewery";
import SingleBeer from "./components/SingleBeer";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/> 
      <div className="scrollbar" id="style-2">
        <div className="force-overflow">         
        <Route exact path="/" component={Home}></Route> 
        <Route exact path="/brewery" component={BreweryList}></Route>
        <Route exact path="/beers" component={SearchBeers}></Route>
        <Route exact path="/breweries/brewery/:id" component={SingleBrewery}></Route>
        <Route exact path="/beer/:id" component={SingleBeer}></Route>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default App;