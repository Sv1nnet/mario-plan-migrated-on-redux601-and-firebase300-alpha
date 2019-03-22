/* eslint-disable newline-per-chained-call */
/* eslint-disable import/prefer-default-export */
export const signIn = credentials => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.auth().signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    })
    .catch(() => console.log('signout failed'));
};

export const signUp = newUser => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  ).then(resp => firestore.collection('users').doc(resp.user.uid).set({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    initials: newUser.firstName[0] + newUser.lastName[0],
  })).then(() => {
    dispatch({ type: 'SIGNUP_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'SIGNUP_ERROR', err });
  });
};
