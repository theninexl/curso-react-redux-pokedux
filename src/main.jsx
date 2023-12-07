import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { pokemonsReducer } from './reducers/pokemons.js';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './index.css'
import'antd/dist/reset.css';

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
