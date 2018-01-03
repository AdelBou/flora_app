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
  TouchableOpacity
} from 'react-native'
import Flora from  '../components/flora';
import  them from '../../static/colors/colors';
import GameBoard from './GameBoard'
import * as actions from '../myredux/myactions/myactions';
import {connect} from 'react-redux';
import {Container} from 'native-base';

class Thegame extends Component {
  state: {
    gameStarted: boolean
  };

  constructor() {
    super();
    this.state={ gameStarted: false }
  }

  startGame() {
    this.setState({ gameStarted: true })
  }


  renderView(){
    if (this.props.floraState==='play')
        return (
   <View style={styles.container}>
            <GameBoard />
   </View>
    );
      else
        return <Flora/>;

  }


  render() {
    return <View>
        {this.renderView()}
        </View>;

  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: them.background,
  }
});

const mapStateToProps = (state, ownProps) => {
    return {floraState: state.stateFlora};
};

export default connect(mapStateToProps, actions)(Thegame);