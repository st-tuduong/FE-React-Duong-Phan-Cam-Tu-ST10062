import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import {logger} from 'redux-logger';
import appMiddleware from './app/app.middlewares';
import appReducer from './app/app.reducers';
import createSagaMiddleware from 'redux-saga';
import { Provider} from 'react-redux';
import Page from './app/pages/Page';
import Home from './app/pages/home/Home';
import Cart from './app/pages/cart/Cart';
import './App.css';
import '../src/stylesheet/styles.css';

const App = () => {
  const middlewares = createSagaMiddleware();
  const store = createStore(appReducer, applyMiddleware(middlewares, logger));

  middlewares.run(appMiddleware);

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
