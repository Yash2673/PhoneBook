import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import RootReducer from './store/reducers/RootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(RootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
