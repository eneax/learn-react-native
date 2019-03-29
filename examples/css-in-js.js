import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'


const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: '#333';
`

const WelcomeText = styled.Text`
  color: white;
  font-size: 20;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export default class cssJs extends Component {
  render() {
    return (
      <CenterView>
        <WelcomeText>Hello</WelcomeText>

        <WelcomeBtn onPress={() => alert('Hiiii')}>
          <WelcomeText>
            Push Meee
          </WelcomeText>
        </WelcomeBtn>
      </CenterView>
    )
  }
}
