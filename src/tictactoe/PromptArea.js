/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import {
  GAME_RESULT_NO,
  GAME_RESULT_USER,
  GAME_RESULT_AI,
  GAME_RESULT_TIE
} from './constantGame';
import MyButton from "../components/common/myButton";
import them from "../../static/colors/colors";
export default class Header extends Component {
  generateResultText(result: number) {
    switch (result) {
      case GAME_RESULT_USER:
        return 'لقد ربحت'
      case GAME_RESULT_AI:
        return 'لقد خسرت'
      case GAME_RESULT_TIE:
        return 'تعادل'
      default:
        return ''
    }
  }

  render() {
    const { result, onRestart } = this.props
    return (
      <View>
        <Text style={styles.text}>{ this.generateResultText(result) }</Text>
        {
          result !== GAME_RESULT_NO && (
            <MyButton colorstyle={them.blue}  onPress={() => onRestart()} additionalTextStyle={{fontSize:14}}  additionalStyle={{height:30,marginBottom:5 ,marginRight: 5}} >
  اللعب مجددا
            </MyButton>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  instructions: {
    marginTop: 5,
    color: 'grey',
    marginBottom: 5,
    textAlign: 'center'
  },
})
