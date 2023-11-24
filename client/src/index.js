import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import {  applyMiddleware, compose } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import App from './App';
import authReducer from './reducer/auth';
import peopleReducer from './reducer/people';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer:{
  person:authReducer,
  people:peopleReducer
}});
root.render(
  <React.StrictMode>
    
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
);
