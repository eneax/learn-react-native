import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'


const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text style={styles.text}>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>This is the Dashboard view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text style={styles.text}>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='black' />
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='black' />
    },
  },
});


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <Drawer />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});
