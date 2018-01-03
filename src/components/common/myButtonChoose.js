import React ,{Component} from 'react';
import {Button, Icon, Thumbnail} from 'native-base';
import {Text, View, Animated, StyleSheet, Easing, TouchableWithoutFeedback} from 'react-native';
import * as actions from '../../myredux/myactions/myactions';
import { connect } from 'react-redux';


class MyButtonChoose extends Component  {
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

    };


    render(){

    return (
        <TouchableWithoutFeedback onPress={this.work} disabled={this.props.disabled}>
            <Animated.View style={[
                styles.button, {backgroundColor: this.props.colorstyle}, this.props.additionalStyle,
                {transform: [{scale: this.buttonScale}]}
            ]}
            >
                <View style={styles.layoutStyle}>
                     {image(this.props.icon)}
                    <Text style={[styles.textStyle,this.props.additionalTextStyle]}> {this.props.children}</Text>
                </View>

            </Animated.View></TouchableWithoutFeedback>
    )};
};

const image = (icon) => {
    let req;
    switch (icon) {
         case 'egg':
            req = require('../../../static/food/egg.png');
            break;
        case 'apple':
            req = require('../../../static/food/apple.png');
            break;
        case 'chocolate':
            req = require('../../../static/food/chocolate.png');
            break;
        case 'milk':
            req = require('../../../static/food/milk.png');
            break;
        case 'rice':
            req = require('../../../static/food/rice.png');
            break;
        case 'salad':
            req = require('../../../static/food/salad.png');
            break;
        case 'sandwich':
            req = require('../../../static/food/sandwich.png');
            break;
        case 'soda':
            req = require('../../../static/food/soda.png');
            break;
        case 'spaghetti':
            req = require('../../../static/food/spaghetti.png');
            break;
        case 'water':
            req = require('../../../static/food/water.png');
            break;
             case 'dentalfloss':
            req = require('../../../static/wash/dentalfloss.png');
            break;
              case 'toothbrush':
            req = require('../../../static/wash/toothbrush.png');
            break;
              case 'toothpaste':
            req = require('../../../static/wash/toothpaste.png');
            break;
    }
    if (req)
        return <Thumbnail square source={req} style={{marginRight:10,marginBottom: 8, width: 25, height: 25}}/>;
};


const styles = StyleSheet.create({
    layoutStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
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

export default connect(mapStateToProps, actions)(MyButtonChoose);

