const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed',
      };

    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;

    case 'SINGUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null,
      };

    case 'SIGNUP_ERROR':
      console.log('signup error', action.err);
      return {
        ...state,
        authError: action.err.message,
      };

    default:
      return state;
  }
};

export default authReducer;
