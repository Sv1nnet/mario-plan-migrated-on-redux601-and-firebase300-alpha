/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
      getFirestore,
    })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: 'users',
      attachAuthIsReady: true,
    }),
  ));

console.log('typeof store:', typeof store);
console.log('store:', store);
console.log('store.state:', store.getState());

store.firebaseAuthIsReady
  .then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  })
  .catch((err) => {
    ReactDOM.render(<div>Could not to reach firebase with error: {err}</div>, document.getElementById('root'));
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
