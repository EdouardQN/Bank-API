export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'

const INITIAL_STATE = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
         return {
           isAuthenticated: true,
           token: action.payload.token,
         };
    
    case LOGIN_FAILURE:
      return { 
          isAuthenticated: false, token: null, error: action.payload 
        };

    case LOGOUT:
      // Supprimer le token côté client lors de la déconnexion
      return {
        isAuthenticated: false,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;