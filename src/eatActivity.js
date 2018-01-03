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
import food1 from "../static/data/datafood1";
import food2 from "../static/data/datafood2";

import t1 from '../static/sounds/play.mp3';
import t2 from '../static/sounds/sip.mp3';
import t3 from '../static/sounds/eat.mp3';
import Sound from 'react-native-sound';

Sound.setCategory('Playback', true);

class EatActivity extends Component {

    constructor(props) {
        super(props);
        let item;
        if (this.props.id < 5) item = this.getByValue(food1, this.props.id); else
            item = this.getByValue(food2, this.props.id);
        this.state = {
            start: false,
            progress: this.props.progressValue,
            timerId: null,
            do: item
        };

        this.props.setStateFlora('eat');
        if (item.type===1)
        this.playSound(3);
        else   this.playSound(2);
    };

      playSound  (x) {
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

    quit = () => {
        if (this.props.ill || this.props.prog === 0)
            this.props.setStateFlora('sad');
        else
            this.props.setStateFlora('normal');
        Actions.main();
    };

    getByValue = (arr, value) => {

        for (let i = 0, iLen = arr.length; i < iLen; i++) {

            if (arr[i].id === value) return arr[i];
        }
    };










    render() {
        return (
            <Container style={{backgroundColor: them.background,paddingTop:18}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={0.8} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.pink}>الطعام</BorderedText>
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
                                      additionalStyle={{height: 50, marginRight: 5}} onPress={this.quit
                        }>عودة</MyButtonIcon>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


const mapStateToProps = (state, ownProps) => {

    return {ill: state.ill, prog: state.progress};
};


const time = 30;
export default connect(mapStateToProps, actions)(EatActivity);