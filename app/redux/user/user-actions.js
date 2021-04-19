import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { googleWebClientId } from '../../config';
import { userActionTypes } from "./user-action-types"

GoogleSignin.configure({
  webClientId: googleWebClientId
});

export const registerUserWithCredentials = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.USER_REGISTER_REQUEST
    })
    
  } catch (error) {
    dispatch({
      type: userActionTypes.USER_REGISTER_FAIL,
      payload: error
    })
  }
}

export const loginInWithFacebook = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_REQUEST
    });

    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    const user = await auth().signInWithCredential(facebookCredential);
    
    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_FAIL,
      payload: error
    })
  }
}

export const loginInWithGoogle = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_REQUEST
    })
    
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user = await auth().signInWithCredential(googleCredential);

    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_SUCCESS,
      payload: user
    })
  } catch (error) {
    dispatch({
      type: userActionTypes.USER_SOCIAL_LOGIN_FAIL,
      payload: error
    })
  }
}

export const loginInWithEmailAndPassword = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.USER_LOGIN_REQUEST,
    })

  } catch (error) {
    dispatch({
      type: userActionTypes.USER_LOGIN_FAIL,
      payload: error
    })
  }
}

export const logOut = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.USER_LOGOUT_REQUEST
    })

    await auth().signOut()

    dispatch({
      type: userActionTypes.USER_LOGOUT_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: userActionTypes.USER_LOGOUT_ERROR,
      payload: error
    })
  }
}
