import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = ({ navigation }) => {

   const { state, signIn, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);



   return (
      <View>
         <NavigationEvents
            // onWillFocus={()=>{}}
            // onDidFocus={}
            // onDidBlur={()=>{}}
            onWillFocus={clearErrorMessage}
         />
         <AuthForm
            headerText="Sign In To Your Account"
            errorMessage={state.errorMessage}
            signButtonText="Sign In"
            signFunc={({ email, password }) => signIn({ email, password })}
         />
         <NavLink
            routeName="Signup"
            text="You don't have an account? Sign Up"
         />
      </View>
   )
}
SigninScreen.navigationOptions = () => {
   return {
      headerShown: false,
   };
};

export default SigninScreen

const styles = StyleSheet.create({})
