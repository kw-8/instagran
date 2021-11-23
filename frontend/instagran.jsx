import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import * as sessionActions from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  const store = configureStore();
  // ReactDOM.render(<h1>hello hello</h1>, root);
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.sessionActions = sessionActions;
  ReactDOM.render(<Root store={store} />, root);
})