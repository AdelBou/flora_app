import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {MyButtonIcon, BorderedText} from "./components/common";
import ProgressBar from "./components/common/myprogress";
import them from "../static/colors/colors";
import MyButtonChoose from "./components/common/myButtonChoose";
import {Actions} from 'react-native-router-flux';
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';
import washDo from '../static/data/datawash';
import t1 from '../static/sounds/brush.mp3';
import t2 from '../static/sounds/toothpast.mp3';
import t3 from '../static/sounds/dentalfloss.mp3';
import Sound from 'react-native-sound';

Sound.setCategory('Playback', true);

class WashActivity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            start: false,
            progress: this.props.progressValue,
            timerId: null,
            do: this.getByValue(washDo, this.props.id),
        };
        this.props.setStateFlora('teeth');
        this.playSound(this.state.do.id);
        this.toogle = this.toogle.bind(this);


    };

    playSound(x) {
        console.log("okay");
        let file;
        switch (x) {
            case 0:
                file = t1;
                break;
            case 1:
                file = t2;
                break;
            case 2:
                file = t3;
                break;
        }

        // const s = new Sound(file, (error) => { // does not work
        const s = new Sound(file, (error) => { // works
            if (error) {
                console.log('error', error);
                return;
            }

            s.play(() => {
                s.release()
            });
        });
    };

    getByValue = (arr, value) => {

        for (let i = 0, iLen = arr.length; i < iLen; i++) {

            if (arr[i].id === value) return arr[i];
        }
    };


    toogle = () => {
        let st = this.state.start;
        if (st) {
            clearInterval(this.state.timerId);
            this.setState({
                start: false,
            });
        }
        else {
            this.setState({
                start: true,
            });
            this.startTimer((this.props.progressValue / 100) * time);
        }
    };


    startTimer = (duration) => {
        let timer = duration, minutes, seconds;


        let timerId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;


            //this.updatePrgress(minutes*60+seconds /100);

            // display.textContent = minutes + ":" + seconds;
            if (this.state.start) {
                this.props.setProgress(Math.round(minutes * 60 + seconds / time * 100));
            }

            if (--timer < 0) {
                // timer = duration;
                this.toogle();
            }
        }.bind(this), 1000);

        this.setState({
            timerId: timerId
        })
    };

    quit = () => {
        if (this.props.ill)
        this.props.setStateFlora('sad');
        else this.props.setStateFlora('normal');
        Actions.main();
    };

    render() {


        return (
            <Container style={{backgroundColor: them.background  ,paddingTop:18}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={0.8} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.pink}>تنظيف الاسنان</BorderedText>
                    </Row>

                    <Row size={5} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <Flora type={'normal'}/>
                    </Row>
                    <Row size={1} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
                            <MyButtonChoose icon={this.state.do.image}
                                            colorstyle={them.green}
                                            additionalStyle={{height: 80, marginRight: 10, marginLeft: 10}}
                                            additionalTextStyle={{fontSize: 20, color: them.text}}
                                            disabled={true}
                                            onPress={() => {
                                            }}>
                                {this.state.do.title}
                            </MyButtonChoose>
                        </View>
                    </Row>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <MyButtonIcon colorstyle={them.green} icon={'return'}
                                      additionalStyle={{height: 50, marginRight: 5}}
                                      onPress={this.quit}
                        >عودة</MyButtonIcon>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {ill: state.ill};
};


const time = 30;
export default connect(mapStateToProps, actions)(WashActivity);