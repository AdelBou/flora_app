import React from 'react';
import {Button, Icon, Thumbnail} from 'native-base';
import {Text, View, Animated, StyleSheet, Easing, TouchableOpacity} from 'react-native';

const BorderedText = (props) => {
    return (
        <View style={[
            props.noDefaultStyles ? styles.default_button : styles.button,
            props.styles ? props.styles.button : '', {backgroundColor: props.colorstyle}, props.additionalStyle,

        ]}>

              <Text style={[styles.textStyle,props.additionalTextStyle]}> {props.children} </Text>

        </View>
    )
};


const styles = StyleSheet.create({
    layoutStyle: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: '#FFF',

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

export {BorderedText};