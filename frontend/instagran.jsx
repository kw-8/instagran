import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
// import * as sessionActions from './actions/session_actions'
// import * as postActions from './actions/post_actions'
// import * as likeActions from './actions/like_actions'
// import * as followActions from './actions/follow_actions'

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        posts: {}
      },
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.store = store;
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.sessionActions = sessionActions;
  // window.postActions = postActions;
  // window.likeActions = likeActions;
  // window.followActions = followActions;
  ReactDOM.render(<Root store={store} />, root);
})