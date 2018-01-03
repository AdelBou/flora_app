import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button,BackAndroid} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {MyButtonIcon, BorderedText} from "./components/common";
import MyButton from "./components/common/myButton";
import them from '../static/colors/colors';
import ProgressBar from "./components/common/myprogress";
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import ClockBar from './components/common/myClock';

class MainActivity extends Component {


    constructor(props) {
        super(props);
        this.state = {
            timerEatId:null,
            sleep: false,
        };
        if (!this.props.hangry)
            this.startTimerforEat(eatIntervale * time);
    }

    startTimerforEat = (duration) => {
        let timer = duration, minutes, seconds;

        let timerId = setInterval(function () {
            this.setState({timerEatId:timerId});
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if (this.props.didEat) {
                //timer = duration;
                this.stopEatTimer();
                this.props.setdidEat(false);
            }
            if (--timer < 0) {
                this.props.setHangry(true);
                clearInterval(timerId);
            }
        }.bind(this), 1000);

    };

    stopEatTimer(){
        //this.props.setHangry(false);
        clearInterval(this.state.timerEatId);
    }


    sleep = () => {
        this.stopEatTimer();
        this.props.setSleep(true);
        this.setState({sleep: true});
        this.startTimer(sleephoures * time);
        this.props.setStateFlora('sleep');
    };

    startTimer = (duration) => {
        let timer = duration, minutes, seconds;
        let timerId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            this.props.setHoure(9 - Math.round(minutes * 60 + seconds / time));

            if (--timer < 0) {

                this.props.setSleep(false);
                this.props.setHoure(0);
                this.props.setProgress(100);
                if (!this.props.ill)
                this.props.setStateFlora('normal');
                else this.props.setStateFlora('sad');
                this.setState({sleep: false});
                clearInterval(timerId);

            }

        }.bind(this), 1000);


    };

    renderTheProgress() {
        if (!this.state.sleep) {
            return (<ProgressBar/>);
        }
        else {
            return (<ClockBar/>);
        }
    }

    renderMessage() {
        let msg;
        if ( this.props.ill) msg=godentist;
        else if(this.props.dirty)msg=dirty;
        else if (this.props.hangry) msg=hangry;
        if (!this.state.sleep) {
            if (this.props.ill || this.props.hangry || this.props.dirty) {
                return (
                    <Row size={1}
                         style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.blue} additionalStyle={{height:50}}
                                      additionalTextStyle={{color: them.text, fontSize: 18, fontWeight: 'bold'}}>
                            {msg}
                        </BorderedText>
                            <MyButtonIcon additionalStyle={{height:50}} colorstyle={them.blue} disabled={this.state.sleep} icon={'alarm'} left/>
                    </Row>);
            }


        }


    }

    render() {
        return (
            <Container style={{backgroundColor: them.background,paddingTop:18}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={0.8}>
                        <View style={styles.exitaboutlayout}>
                            <MyButtonIcon colorstyle={them.blue} disabled={this.state.sleep} icon={'about'} left onPress={() => {
                                Actions.about();this.stopEatTimer();
                            }}/>
                            <BorderedText colorstyle={them.pink}
                                          additionalTextStyle={{fontSize: 40, fontWeight: 'bold'}}>فلورا</BorderedText>
                            <MyButtonIcon additionalStyle ={{height: 0 ,marginTop:10, borderWidth: 0}}  right/>
                        </View>
                    </Row>
                    {this.renderMessage()}
                    <Row size={0.4}
                         style={{justifyContent: 'center', alignItems: 'center'}}>
                        {this.renderTheProgress()}
                    </Row>

                    <Row size={4.5} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <Flora/>
                    </Row>
                    <Row size={1} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <View style={[styles.buttonslayout, {marginTop: 2}]}>
                            <MyButton colorstyle={them.green} icon={'sleep'}
                                      onPress={this.sleep}
                                      disabled={this.state.sleep}
                                      additionalTextStyle={{color: them.text, fontWeight: 'bold'}}
                            >النوم</MyButton>
                            <MyButton colorstyle={them.green} icon={'play'} onPress={() => {
                               this.stopEatTimer(); Actions.play();
                            }}
                                      additionalTextStyle={{
                                          color: them.text,
                                          fontWeight: 'bold'
                                      }}
                                      disabled={this.state.sleep}
                            >اللعب</MyButton>
                            <MyButton colorstyle={them.green} icon={'eat'} onPress={() => {
                               this.stopEatTimer(); Actions.chooseFood();
                            }}
                                      disabled={this.state.sleep}
                                      additionalTextStyle={{color: them.text, fontWeight: 'bold'}}>الطعام</MyButton>
                        </View>
                    </Row>

                    <Row size={1}>
                        <View style={[styles.buttonslayout, {marginBottom: 2}]}>
                            <MyButton colorstyle={them.blue} icon={'dentist'} additionalStyle={{marginRight: 10}}
                                      disabled={this.state.sleep}
                                      additionalTextStyle={{color: them.text, fontWeight: 'bold'}} onPress={() => {
                            this.stopEatTimer();    Actions.dentist();
                            }}>زيارة
                                الطبيب</MyButton>
                            <MyButton colorstyle={them.blue} icon={'brush'} additionalStyle={{marginLeft: 10}}
                                      disabled={this.state.sleep}
                                      additionalTextStyle={{color: them.text, fontWeight: 'bold'}} onPress={() => {
                              this.stopEatTimer();  Actions.chooseWash();
                            }}>تنظيف
                                الأسنان</MyButton>
                        </View>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


const styles = {

    exitaboutlayout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonslayout: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    centerButtonLayout: {
        justifyContent: 'center'
    }
};


const options = {
    container: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 5,
        width: 220,
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    }
};
const time = 1;

const mapStateToProps = (state, ownProps) => {
    const progress = state.progress;
    return {
        progressValue: progress, asleep: state.asleep, ill: state.ill, hangry: state.hangry, didEat: state.didEat
        , dirty: state.dirty ,houres: state.hoursSleep
    };
};

const godentist='أحتاج إلى زيارة طبيب الأسنان';
const hangry='أنا جائعة';
const dirty='يجب أن أنظف أسناني';


const eatIntervale =35;
const sleephoures=9;

export default connect(mapStateToProps, actions)(MainActivity);

