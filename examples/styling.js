import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// ! Inline Object
export default class App1 extends React {
  render() {
    return (
      <View style={{
        flex: 1, 
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text style={{color: "red"}}>Hello!</Text>
      </View>
    )
  }
}


// ! Store the object in a variable
export default class App2 extends React {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1, 
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "red"
  }
}


// ! Using StyleSheet (performance boost)
export default class App3 extends React {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: "red"}}>Hello!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
})
