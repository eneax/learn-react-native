import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        { Platform.OS === 'ios'
          ? <Ionicons name='ios-pizza' size={100} color='red' />
          : <Ionicons name='md-pizza' size={100} color='red' /> }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
