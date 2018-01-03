import React ,{Component} from 'react';
import {Button, Icon, Thumbnail} from 'native-base';
import {Text, View, Animated, StyleSheet, Easing, TouchableWithoutFeedback} from 'react-native';
import * as actions from '../../myredux/myactions/myactions';
import { connect } from 'react-redux';
import theme from '../../../static/colors/colors';


class MyButton extends Component  {
     scaleValue = new Animated.Value(0);
     buttonScale = this.scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1.1, 1.5, 1.1]
    });
    scale=  ()=>  {
      this.scaleValue.setValue(0);
        Animated.timing(
            this.scaleValue,
            {
                toValue: 1,
                duration: 400,
                easing: Easing.easeOutBack
            }
        ).start();
    };
     work =()=>  {
        this.scale();
        this.props.onPress();
        console.log('adel='+this.props.state);
    };


    render(){
    return (
        <TouchableWithoutFeedback onPress={this.work} disabled={this.props.disabled}>
            <Animated.View style={[
                styles.button, {backgroundColor: this.props.disabled ?theme.disable:this.props.colorstyle}, this.props.additionalStyle,
                {transform: [{scale: this.buttonScale}]}
            ]}
            >
                <View style={styles.layoutStyle}>
                    <Text style={[styles.textStyle,this.props.additionalTextStyle]}> {this.props.children}</Text>
                    {image(this.props.icon)}
                </View>

            </Animated.View></TouchableWithoutFeedback>
    )};
};

const image = (icon) => {
    let req;
    switch (icon) {
        case 'eat':
            req = require('../../../static/icons/eat.png');
            break;
        case 'sleep':
            req = require('../../../static/icons/sleep.png');
            break;
        case 'dentist':
            req = require('../../../static/icons/dentist.png');
            break;
        case 'play':
            req = require('../../../static/icons/play.png');
            break;
        case 'brush':
            req = require('../../../static/icons/brush.png');
            break;
                case 'plus':
            req = require('../../../static/icons/plus.png');
            break;
    }
    if (req)
        return <Thumbnail square source={req} style={{marginBottom: 8, width: 25, height: 25}}/>;
};


const styles = StyleSheet.create({
    layoutStyle: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle: {
        marginTop: 5,
        fontSize: 20,
        color: '#FFFFFF',

    },
    default_button: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        margin: 5,
        padding: 20,
        borderRadius: 5,
        borderColor: '#39484F', borderWidth: 2,
    },
});

const mapStateToProps = (state,ownProps) => {
    console.log("the preogress in button == " + state.progress);
    return state;
};

export default connect(mapStateToProps, actions)(MyButton);

