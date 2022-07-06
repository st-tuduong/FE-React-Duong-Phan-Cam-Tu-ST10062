import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import appReducer from './app/app.reducers';
import { Provider, useSelector} from 'react-redux';
import Page from './app/pages/Page';
import Home from './app/pages/home/Home';
import Cart from './app/pages/cart/Cart';
import './App.css';
import '../src/stylesheet/styles.css';

const App = () => {
  const middlewares = applyMiddleware(thunk, logger);
  const store = createStore(appReducer, middlewares)

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
