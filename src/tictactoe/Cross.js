/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Thumbnail} from 'native-base';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Cross extends Component {
  render() {
    const { xTranslate, yTranslate, color } = this.props;
    return (
          <View style={[styles.container, {
        transform: [
          {translateX: (xTranslate ? xTranslate : 10) },
          {translateY: (yTranslate ? yTranslate : 10) - 5},
        ]
      }]}>
         <Thumbnail source={require('../../static/img/cross.png')} square
                                  style={[styles.line
        ,{width:80,height:80}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  line: {
    position: 'absolute',
    width: 8,
    height: 105,
  },

})
