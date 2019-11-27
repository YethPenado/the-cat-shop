import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from './Context';
import ProductsData from './products/products.json';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Provider value = {{ProductsData}}>
      <BrowserRouter>
        <Switch>
          <Route path = {'/'} component= {Home} exact />
          <Route path = {'/Cart'} component= {Cart} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
