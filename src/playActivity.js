import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { MyButtonIcon, BorderedText} from "./components/common";
import ProgressBar from "./components/common/myprogress";
import them from "../static/colors/colors";
import MyButton from "./components/common/myButton";
import { Actions } from 'react-native-router-flux';
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';
import t1 from '../static/sounds/play.mp3';
import t2 from '../static/sounds/sip.mp3';
import t3 from '../static/sounds/eat.mp3';
import Sound from 'react-native-sound';
import Thegame from './tictactoe/thegame';

Sound.setCategory('Playback', true);
class PlayActivity extends Component {

    constructor(props) {
        super(props);
        this.state={
            start:false,
            progress:this.props.progressValue,
            timerId:null,
        };

        this.toogle = this.toogle.bind(this);


    };
      playSound  (x) {
          console.log("okay");
      let file ;
      switch (x){
          case 1:
              file=t1;
              break;
                case 2:
              file=t2;
              break;
                case 3:
              file=t3;
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

     toogle=()=>{
         let st=this.state.start;
         if (st) {
             clearInterval(this.state.timerId);
             this.setState({
                 start: false,
             });
              this.props.setStateFlora('normal');
         }
         else{
                this.props.setStateFlora('play');
                this.setState({
                 start: true,
             });
                this.startTimer((this.props.progressValue/100)*time);
         }
    };

    quit=()=>{
        if (this.state.start){
        this.toogle();}
        Actions.main();
    };

    startTimer = (duration) =>{
       // this.playSound(1);
    let timer  = duration, minutes, seconds;
    //console.log("hohoo=="+timer);

    let timerId=setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

       // if (seconds % 5===0 && seconds>5) this.playSound(1);
        //this.updatePrgress(minutes*60+seconds /100);
        console.log("m=="+minutes+"s="+seconds);
       // display.textContent = minutes + ":" + seconds;
        if (this.state.start){
            this.props.setProgress(Math.round(((minutes*60+seconds)/time) *100));

        }

        if (--timer < 0) {
           // timer = duration;
            this.toogle();
        }
    }.bind(this), 1000);

    this.setState({timerId:timerId
    })
};




    render() {
        return (
            <Container style={{backgroundColor: them.background}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={0.8} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.pink}>اللعب</BorderedText>
                    </Row>
                    <Row size={0.5}
                         style={{justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5}}>
                        <ProgressBar />
                    </Row>
                    <Row size={8} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <Thegame/>
                    </Row>
                    <Row size={0.5} style={{justifyContent: 'center', alignItems: 'stretch'}} >

                    </Row>
                    <Row style={{justifyContent: 'flex-end'}} size={1} >
                                      <View style={{justifyContent: 'flex-end', alignItems: 'stretch' }}>
                            <MyButton colorstyle={them.green} additionalStyle={{height: 40,marginRight:15,marginBottom:15}}
                                      additionalTextStyle={{fontSize: 20, color: them.text}}
                                      onPress={this.toogle}
                                      disabled={this.props.progressValue===0}
                            >
                                {(this.props.progressValue===0)?"لا استطيع اللعب انا متعبة":!this.state.start ? "اللعب" : "التوقف"}
                                      </MyButton>
                        </View>

                        <MyButtonIcon colorstyle={them.green} icon={'return'}
                                      additionalStyle={{height: 40, marginRight: 5}}
                                      onPress={this.quit}
                        >عودة</MyButtonIcon>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const progress = state.progress;
    return {progressValue: progress};
};


const time=200;
export default connect(mapStateToProps, actions)(PlayActivity);