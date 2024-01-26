export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_FAIL = 'USER_PROFILE_FAIL'
export const USER_PROFILE_RESET = 'USER_PROFILE_RESET'


const INITIAL_STATE = { success: false, firstName: null, lastName: null }

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
      }
    case USER_PROFILE_FAIL:
      return { error: action.payload }
    case USER_PROFILE_RESET:
      return {
        firstName: null,
        lastName: null,
      }  
    default:
      return state
  }
}

export default userReducer;