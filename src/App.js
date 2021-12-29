import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";

import Navbar from "./components/Navbar";
import PokemonDetails from "./components/PokemonDetails";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'






function App() {



  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pokemon/:id' component={PokemonDetails} />
      </Switch>

    </Router>


  );

}

export default App;
