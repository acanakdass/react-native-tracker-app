import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Button } from 'react-native-elements'
const NavLink = ({ navigation, text, routeName }) => {
   return (
      <View>
         <Button
            type="clear"
            title={text}
            onPress={() => navigation.navigate(routeName)}
         />
      </View >
   )
}

export default withNavigation(NavLink);

const styles = StyleSheet.create({})
