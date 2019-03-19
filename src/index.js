/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './store/reducers/rootReducer';

// We enhance compose in order to use Redux DevTools extension
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create config for rrfProps object. We need this to pass it in the ReactReduxFirebaseProvider component
const rrfConfig = {
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  userProfile: 'users',
  attachAuthIsReady: true,
};

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase), // still need this line to get access to firestore via getFirestore function (in projectActions, for example)
  ));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // Create firestore instead of craete it in fbConfig.js
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

console.log('store', store);
console.log('state', store.getState());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
