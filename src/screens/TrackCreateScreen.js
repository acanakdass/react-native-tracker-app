import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
const TrackCreateScreen = () => {
   return (
      <SafeAreaView forceInset={{ top: 'always' }}>
         <View>
            <Text h2>Track Create Screen</Text>
         </View>
      </SafeAreaView>
   )
}

export default TrackCreateScreen

const styles = StyleSheet.create({})
