import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Covid from './Covid';
import State from './State';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <h1>Live</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Covid} />
      <Route path='/State' component={State} />
    </Switch>
    
     {/* <State /> */}

    </div>
  );
}

export default App;
