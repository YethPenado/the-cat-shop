import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = {'/'} component= {Home} exact />
        <Route path = {'/Cart'} component= {Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
