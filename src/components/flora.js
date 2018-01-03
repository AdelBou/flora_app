//import libraries


//render it to device

import React, {Component} from 'react';
import {Thumbnail} from 'native-base';
import {Card} from "./common";
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import * as actions from '../myredux/myactions/myactions';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import them from '../../static/colors/colors';

class Flora extends Component<{}> {
    state = {
        state: 'normal',
    };

    componentWillMount() {
        if (this.props.type) this.setState({state: this.props.type});
    }


    getImage(i) {
        switch (i) {
            case 'normal':
                if (!this.props.dirty)
                    return require('../../static/img/flora_1.png');
                else
                    return require('../../static/img/flora_teeth_green.png');
                break;
            case 'teeth':
                return require('../../static/img/flora_CleaningTeeth.png');
                break;
            case 'dentist':
                return require('../../static/img/flora_dentiste.png');
                break;
            case 'eat':
                return require('../../static/img/flora_eat.png');
                break;
            case 'sad':
                      return require('../../static/img/flora_sad.png');
                break;
            case 'play':
                return require('../../static/img/flora_play.png');
                break;
            case 'sleep':
                return require('../../static/img/flora_sleep.png');
                break;
            default:
                return require('../../static/img/flora_1.png');
                break;


        }
    }

    stopAnimation(animation) {
        this.refs[animation].stopAnimation();
    };

    //3=>sleep //infini
    //0=>play //infini
    //6=>eat // //2
    //normal =>8 //2
    //teeth 7;

    getIdAnimation() {
        switch (this.props.stateFlora) {
            case 'normal' :
                return {anim: 8, type: '2'};
                break;

            case 'teeth':
                return {anim: 7, type: '2'};
                break;
            case 'dentist':
                return {anim: 0, type: '2'};
                break;
            case 'eat':
                return {anim: 6, type: '2'};
                break;
            case 'sad':
                return {anim: 3, type: 'infinite'};
                break;
            case 'play':
                return {anim: 0, type: 'infinite'};
                break;
            case 'sleep':
                return {anim: 3, type: 'infinite'};
                break;
            default:
                return {anim: 8, type: '2'};
                break;
        }
    }

    renderFlora = () => {
        let anime = this.getIdAnimation();
        let start = anime.anim;
        let selected_animations = animations.slice(start, start + 1);
        return selected_animations.map((animation, index) => {
            return (
                <View
                    key={index}
                    onPress={this.stopAnimation.bind(this, animation[0])}
                    noDefaultStyles={true}
                >
                    <Animatable.View
                        ref={animation[0]}
                        animation={animation[0]}
                        iterationCount={anime.type}>
                        <Thumbnail source={this.getImage(this.props.stateFlora)} square
                                   style={{width: 290, height: 290, margin: 10}}/>
                    </Animatable.View>
                </View>

            );
        });
    };

    //        <Thumbnail square source={require('../../static/img/flora_1.png')} style={{width: 300, height: 300}}/>

    render() {

        return (
            <Card style={{backgroundColor: (this.props.asleep) ? them.night : them.backgroundColor}}>
                <View>
                    {this.renderFlora(0)}
                </View>
            </Card>
        );
    }
}


let animations = [
    ['bounce', '#62B42C'],
    ['flash', '#316BA7'],
    ['jello', '#A0A0A0'],
    ['pulse', '#FFC600'],
    ['rotate', '#1A7984'],
    ['rubberBand', '#435056'],
    ['shake', '#FF6800'],
    ['swing', '#B4354F'],
    ['tada', '#333333']
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        backgroundColor: '#ccc'
    },
    box_text: {
        color: '#FFF'
    }
});

const mapStateToProps = (state, ownProps) => {
    return {asleep: state.asleep, stateFlora: state.stateFlora, dirty: state.dirty};
};

export default connect(mapStateToProps, actions)(Flora);
