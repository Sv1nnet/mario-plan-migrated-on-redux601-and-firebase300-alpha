// Here we destructure authData object and do authorization
export const signIn = ({ credentials, firebase }) => (dispatch, getState) => {
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password,
  ).then(() => {
    dispatch({ type: 'LOGIN_SUCCESS' });
  }).catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err });
  });
};

export const signOut = firebase => (dispatch, getState) => {
  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });
};
