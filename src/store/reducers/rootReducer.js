import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // syncing firestore
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
