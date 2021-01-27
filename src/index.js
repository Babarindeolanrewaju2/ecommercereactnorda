import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './ProductDetails';
import {MenuProvider} from './Context';
import Cart from './Cart';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
  <MenuProvider>
    <BrowserRouter>
       <Header />
      <Switch>
        <Route path="/" exact> 
          <App />
        </Route>
        <Route path="/productdetails" exact>
          <ProductDetails />
        </Route>
        <Route path="/cart" exact>
          <Cart />
      </Route>
      </Switch>
    </BrowserRouter>
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
