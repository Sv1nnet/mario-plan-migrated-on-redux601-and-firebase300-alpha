/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
export const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {
  // make async call to database
  const firestore = getFirestore();
  const { profile } = getState().firebase;
  const authorId = getState().firebase.auth.uid;

  firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId,
    createAt: new Date(),
  }).then(() => dispatch({
    type: 'CREATE_PROJECT',
    project,
  })).catch(err => dispatch({
    type: 'CREATE_PROJECT_ERROR',
    err,
  }));
};
