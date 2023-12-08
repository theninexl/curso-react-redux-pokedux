import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger, featuring, numberingPokes } from './middlewares/index.js';
import './index.css'
import'antd/dist/reset.css';

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring, numberingPokes)
)

const store = createStore(pokemonsReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
