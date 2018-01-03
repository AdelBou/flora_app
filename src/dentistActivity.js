import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import { ProgressBar, MyButtonIcon, BorderedText} from "./components/common";
import MyButton  from  "./components/common/myButton";
import them from "../static/colors/colors";
import advices from '../static/data/dataadvice';
import { Actions } from 'react-native-router-flux';
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';

 class DentistActivity extends Component {
    constructor(props){
        super(props);
        this.state={
          index: Math.floor(Math.random() * (advices.length)),
        };

         this.props.setStateFlora('dentist');
    }
    quit=()=>{
         this.props.setDirty(false);
         this.props.setStateFlora('normal');
         this.props.setIll(false);
          Actions.main();
    };

    next=()=>{

        this.setState({
            index:(this.state.index +1)%7
        });
 };

    render() {


        return (
            <Container style={{backgroundColor: them.background,paddingTop:18}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={0.8} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.pink} additionalTextStyle={{fontSize: 30, fontWeight: 'bold'}} >فلورا عند طبيب الاسنان</BorderedText>
                    </Row>
                    <Row size={5} style={{justifyContent: 'center', alignItems: 'stretch'}}>
                        <Flora />
                    </Row>
                    <Row size={3} style={{justifyContent: 'center', alignItems: 'stretch', marginBottom: 8}}>
                        <Grid>
                            <Col size={3.5} style={{alignItems: 'stretch'}}>

                                    <BorderedText colorstyle={them.green} additionalStyle={{height: 40,marginRight:15,marginLeft:15}}
                                                       additionalTextStyle={{
                                                           fontSize: 15,fontWeight: 'bold',
                                                           color: them.text
                                                       }}>لتصبح أسناني نظيفة وقوية</BorderedText>
                                    <BorderedText colorstyle={them.blue} additionalStyle={{
                                        minHeight: 140,
                                        margin: 4
                                    }}>{advices[this.state.index].text}</BorderedText>

                            </Col>
                            <Col size={1} style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                <Row><BorderedText colorstyle={them.green} additionalStyle={{height: 40}}
                                                   additionalTextStyle={{
                                                       fontSize: 15,
                                                       color: them.text
                                                   }}>نصيحة:</BorderedText></Row>
                                <Row>
                                    <MyButton colorstyle={them.blue} additionalStyle={{height: 65,padding:4}}
                                              onPress={this.next}
                                                    icon={'plus'}
                                                   additionalTextStyle={{
                                                       fontSize: 12,
                                                       color: them.text
                                                   }}>النصيحة التالية </MyButton>
                                </Row>
                                <Row><MyButtonIcon colorstyle={them.green} icon={'return'}
                                                   additionalStyle={{height: 50,marginTop:10}} onPress={this.quit} >عودة</MyButtonIcon></Row>
                            </Col>
                        </Grid>
                    </Row>
                </Grid>
            </Container>
    );
    }
    }

    const styles = {


        buttonslayout: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
    },
        centerButtonLayout: {
        justifyContent: 'center',
        alignItems:'center'
    }
    };


const mapStateToProps = (state, ownProps) => {
    const progress = state.progress;
    return {progressValue: progress};
};

export default connect(mapStateToProps, actions)(DentistActivity);