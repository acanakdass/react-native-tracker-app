import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {

   const { signOut } = useContext(AuthContext);

   return (
      <SafeAreaView forceInset={{ top: 'always' }}>
         <View>
            <Text h3>Account Screen</Text>
            <Spacer>
               <Button title="Sign Out" onPress={signOut} />
            </Spacer>
         </View>
      </SafeAreaView>
   )
}

export default AccountScreen

const styles = StyleSheet.create({})
