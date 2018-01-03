import React from 'react';
import {Button, Icon, Thumbnail} from 'native-base';
import {Text, View, Animated, StyleSheet, Easing, TouchableOpacity} from 'react-native';

const MyButtonIcon = (props) => {
    return (
        <TouchableOpacity disabled={!!(props.disabled)}
                          style={[
                              props.noDefaultStyles ? styles.default_button : styles.button,
                              props.styles ? props.styles.button : '', {backgroundColor: props.colorstyle}, props.additionalStyle,
                          ]}
                          onPress={props.onPress}
        >

            {image(props)}

        </TouchableOpacity>
    )
};

const image = (props) => {
    let req;
    switch (props.icon) {
        case 'exit':
            req = require('../../../static/icons/exit.png');
            break;

        case 'about':
            req = require('../../../static/icons/about.png');
            break;
        case 'return':
            req = require('../../../static/icons/return.png');
            break;
        case 'alarm':
            req = require('../../../static/icons/alarm.png');
            break;


    }
    if (req) {
        if (props.large)
            return (  <View style={styles.layoutStyle}>
                    <Thumbnail square source={req} style={{width: 50, height: 50}}/></View>
            );
        else return (  <View style={styles.layoutStyle}>
            <Thumbnail square source={req} style={{width: 30, height: 30}}/>
        </View>);
    }
    return (     <View style={styles.layoutStyle}>
    </View>);
};


const styles = StyleSheet.create({
    layoutStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
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
        margin: 2, paddingRight: 10, paddingLeft: 10
        , borderRadius: 5, borderColor: '#39484F', borderWidth: 2,
    },
});

export {MyButtonIcon};

