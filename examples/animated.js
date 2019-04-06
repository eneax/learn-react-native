import React from 'react'
import { StyleSheet, Text, View, Image, Animated } from 'react-native'


export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0), // default, opacity starts at 0
    width: new Animated.Value(0),
    height: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()

    Animated.spring(width, { toValue: 300, speed: 5 }).start()
    Animated.spring(height, { toValue: 300, speed: 5 }).start()
  }

  render() {
    const { opacity, width, height } = this.state

    return (
      <View style={style.container}>
        <Animated.Image 
          style={[styles.img, { opacity, width, height }]}
          source={{ uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
  }
})


/*

! Animation Types
* decay - initial velocity and slow to a stop
* spring - spring physics model
* timing - animated a value over time

*/