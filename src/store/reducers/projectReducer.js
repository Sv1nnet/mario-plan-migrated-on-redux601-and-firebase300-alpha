const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
  ],
};

const projectReducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      newState = { ...state };
      return newState;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      newState = { ...state };
      return newState;
    default:
      return state;
  }
};

export default projectReducer;
