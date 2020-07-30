const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        // signInError: "Login failed",
        signInError: action.err.message,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        signInError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        signUpError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        signUpError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
