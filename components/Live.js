import React, {Component} from 'react'
import { View, Text, ActivityIndicator} from 'react-native' // ActivityIndicator is a loading spinner


export default class Live extends Component {
  state = {
    coords: null,
    status: null, // permissions granted by the user
    direction: '',
  }

  render() {
    const { coords, status, direction } = this.state

    if (status === null) {
      return <ActivityIndicator style={{marginTop: 30}} />
    }

    if (status === 'denied') {
      return (
        <View>
          <Text>Denied</Text>
        </View>
      )
    }

    if (status === 'undetermined') {
      return (
        <View>
          <Text>Undetermined</Text>
        </View>
      )
    }

    // granted permission
    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}
