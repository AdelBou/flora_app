import React, {Component} from 'react';
import {View,Animated,Text, StyleSheet} from 'react-native';
import {Grid,Col} from 'native-base';
import {BorderedText} from './beautifulBordredText';
import theme from '../../../static/colors/colors';
import * as actions from '../../myredux/myactions/myactions';
import { connect } from 'react-redux';

 class ProgressBar extends Component {
    constructor(props) {
         super(props);
        this.progress = new Animated.Value(0);
        this.state = {
            progress: this.props.progressValue
        };
    }

    componentDidMount() {
        this.progress.setValue(this.props.progressValue);
        this.progress.addListener((progress) => {
            this.setState({
                progress: parseInt(progress.value) + '%'
            });
        });
    };


    getProgressStyles= () => {
    myprog=this.props.progressValue;
    let width=220 ;
    let available_width = width - 4;
    let animated_width = myprog *available_width / 100;
    let color_animation=null;

    if (myprog < 30)
        color_animation= '#fba165';
    else if (myprog < 60)
        color_animation= theme.green;
        else color_animation= theme.blue;


    return {
        width: animated_width,
        height:16, //height of the progress bar
        backgroundColor: color_animation,
    }
};






    render() {
        return (
            <Grid style={styles.container}>
                <Col size={5} style={{justifyContent: 'center', alignItems: 'center'}} >
                    <View style={styles.progress_container}>
                    <Animated.View
                        style={this.getProgressStyles(this.props.progressValue)}
                    >
                    </Animated.View>
                    </View>
                </Col>
                <Col size={2.1} style={{justifyContent: 'center', alignItems: 'center'}}>
                             <BorderedText colorstyle={theme.blue} additionalTextStyle={{fontSize: 12, color: theme.text}} additionalStyle={{marginLeft:5}}>الطاقة: { this.props.progressValue}</BorderedText>
                </Col>
            </Grid>
        )
    };
};


const color = (progress) => {
    if (progress < 0.3)
        return '#fba165';
    if (progress < 0.6)
        return '#94d869';
    else return theme.blue;
};
/*
const styles = {
    layoutStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
      paddingTop:5,
      paddingBottom:5,
      marginBottom:5,
    flexDirection: 'row',
    justifyContent: 'center',
      alignContent:'stretch'
  },
  progress_container: {
      width:220,
      height:20,
      marginLeft:20,
      borderWidth: 2,
      borderRadius:5,
    borderColor: theme.text,
    backgroundColor: theme.background
  },
});

const mapStateToProps = (state,ownProps) => {
  const progress = state.progress;
  return {progressValue:progress };
};

export default connect(mapStateToProps, actions)(ProgressBar);