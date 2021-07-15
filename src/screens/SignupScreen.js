import React, { useContext } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';



const SignupScreen = ({ navigation }) => {

   const { state, signUp, clearErrorMessage } = useContext(AuthContext);



   return (
      <View>
         <NavigationEvents
            // onWillFocus={()=>{}}
            // onDidFocus={()=>{}}
            // onDidBlur={()=>{}}
            onWillFocus={clearErrorMessage}
         />
         <AuthForm
            headerText="Sign Up for Tracker App"
            errorMessage={state.errorMessage}
            signButtonText="Sign Up"
            signFunc={({ email, password }) => signUp({ email, password })}
         />
         <NavLink
            routeName="Signin"
            text="Already have an account? Sign In"
         />
      </View>
   )
}
SignupScreen.navigationOptions = () => {
   return {
      headerShown: false,
   };
};

export default SignupScreen

const styles = StyleSheet.create({})
