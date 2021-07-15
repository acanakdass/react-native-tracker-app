import React from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import { Text, Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

const TrackListScreen = ({ navigation }) => {
   return (
      <View>
         {/* <NavigationEvents
            onWillFocus={() => { ToastAndroid.showWithGravity("Welcome to tracker app!", ToastAndroid.LONG, ToastAndroid.CENTER) }}

         /> */}
         <Text h3>Track List Screen</Text>
         <Button type="clear" title="Go to track details" onPress={() => navigation.navigate('TrackDetail')}></Button>
      </View>
   )
}

export default TrackListScreen

const styles = StyleSheet.create({})
