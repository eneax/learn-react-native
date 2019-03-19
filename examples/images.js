import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Local Image */}
        <Image 
          style={styles.img}
          source={require('./eneax.png')}
        />

        {/* External Source */}
        <View style={{margin: 50}}>
          <Image 
            style={styles.img}
            source={{uri: 'https://eneax.com/enea.png'}}
          />
        </View>
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
    justifyContent: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
})
