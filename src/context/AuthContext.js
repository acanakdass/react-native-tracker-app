import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
   switch (action.type) {
      case 'add_error':
         return { ...state, errorMessage: action.payload }
      case 'signin':
         return { errorMessage: '', token: action.payload }
      case 'clear_error_message':
         return { ...state, errorMessage: '' }
      case 'signout':
         return { token: null, errorMessage: '' }
      default:
         return state;
   }
}

//    const add = (a,b) =>{
//       return a+b;         ===  const add(a,b) => a+b
//    }

const tryLocalSignin = (dispatch) => async () => {
   const token = await AsyncStorage.getItem('token');
   if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('TrackList');
   } else {
      navigate('Signin');
   }
}

const signUp = (dispatch) => {
   return async ({ email, password }, callback) => {
      try {
         const response = await trackerApi.post('/signup', { email, password });
         await AsyncStorage.setItem('token', response.data.token);
         console.log(response.data);
         dispatch({ type: 'signin', payload: response.data.token });

         navigate('TrackList');

      } catch (error) {
         dispatch({ type: 'add_error', payload: 'Somethings gone wrong with sign up!' });
         console.log(error.message)
      }
   }
}

const clearErrorMessage = (dispatch) => () => {
   dispatch({ type: 'clear_error_message' })
}

const signIn = (dispatch) => {
   return async ({ email, password }, callback) => {
      try {
         const response = await trackerApi.post('/signin', { email, password });
         await AsyncStorage.setItem('token', response.data.token);
         dispatch({ type: 'signin', payload: response.data.token });

         navigate('TrackList');

      } catch (error) {
         dispatch({ type: 'add_error', payload: 'Check your email or password!' });
         console.log(error.message)
      }
   }
}

const signOut = (dispatch) => async () => {
   await AsyncStorage.removeItem('token');
   dispatch({ type: 'signout' });
   navigate('Signin');
}


export const { Provider, Context } = createDataContext(
   authReducer,
   { signUp, signIn, clearErrorMessage, tryLocalSignin, signOut },
   { token: null, errorMessage: '' }
)