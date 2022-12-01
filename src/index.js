import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import beesReducer from './store/reducers/BeesReducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const app = (
            <App/>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
