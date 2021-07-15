import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, signButtonText, signFunc, errorMessage }) => {


   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <KeyboardAvoidingView>
         <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.container}>
               <Text h3>{headerText}</Text>
               <Spacer />
               <Input
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  autoCorrect={false}
               ></Input>
               <Input
                  label="Password"
                  value={password}
                  secureTextEntry
                  onChangeText={(inputPw => setPassword(inputPw))} />
               {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

               <Button
                  disabled={email === '' || password == ''}
                  type="solid"
                  title={signButtonText}
                  // onPress={() => signUp({ email, password })} />
                  onPress={() => signFunc({ email, password })} />
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   )
}

export default AuthForm

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      // marginBottom: 100,
      marginHorizontal: 30
   },
   contentContainerStyle: {
      paddingVertical: 150,
   },
   errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 2
   }
})
