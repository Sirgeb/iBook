import { SIGNOUT, SIGNIN } from "./user-action-types"

export const signIn = () => {
  try {
    return async dispatch => {
      const token = "token";

      dispatch({
        type: SIGNIN,
        payload: token
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const signOut = () => {
  try {
    return async dispatch => {
      dispatch({
        type: SIGNOUT
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
