import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import { getReviews } from './reviews'


function Review({ name, text, avatar }) {
  return (
    <View style={styles.review}>
      <Image source={{uri: avatar}} style={style.avatar} />
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <Text style={{fontSize: 20}}>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

export default class App extends React.Component {
  renderItem = ({ item }) => {
    return <Review {...item} />
  }

  render() {
    const reviews = getReviews()

    return (
      <View style={styles.container}>
        <FlatList 
          data={reviews}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  review: {
    margin: 10,
    flexDirection: 'row',
  },
})

/*
! FlatList
Instead of rendering the entire list,
we are just rendering the specific items
the user can currently see
*/