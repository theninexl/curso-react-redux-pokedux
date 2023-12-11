import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares/index.js';
import { thunk } from 'redux-thunk';
import './index.css'
import'antd/dist/reset.css';
import { rootReducer } from './reducers/rootReducer.js';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk,logger));

const store = createStore(rootReducer, composeEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
