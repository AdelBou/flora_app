import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, List, Content, Badge, Icon, Button, ListItem} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ProgressBar, MyButtonIcon, BorderedText} from "./components/common";
import MyButtonChoose from "./components/common/myButtonChoose";
import them from "../static/colors/colors";
import food1 from "../static/data/datafood1";
import food2 from "../static/data/datafood2";
import { Actions } from 'react-native-router-flux';
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';

 class ChooseFoodActivity extends Component {


    eatsoda(){
        let s=this.props.food.soda+1;
        let c=this.props.food.chocolate;
        this.props.setEat({soda:s,chocolate:c})
        if (s>2 || c>2){
            this.props.setIll(true);
            this.props.setStateFlora('sad');
        }
    };
    eatchocolat(){
       let s=this.props.food.soda;
        let c=this.props.food.chocolate+1;
        this.props.setEat({soda:s,chocolate:c})
           if (s>2 || c>2){
            this.props.setIll(true);
            this.props.setStateFlora('sad');
        }
    };
    render() {

        return (
                <Container style={{backgroundColor: them.background}}>
                     <View  style={{justifyContent: 'center', alignItems: 'center',margin:10}} >
                            <BorderedText colorstyle={them.pink} additionalTextStyle={{fontSize: 30, fontWeight: 'bold'}} >الطعام</BorderedText>
                     </View>
                     <Grid >
                    <Row size={9}>
                        <Col>
                     <List dataArray={food1}
                          renderRow={(item) =>
                              <View style={{
                                  marginLeft: 20,
                                  marginRight: 20,
                                  flex: 2,
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              }}>
                                  <MyButtonChoose icon={item.image}
                                            colorstyle={them.green}
                                            additionalStyle={{width:140,height: 60, marginRight: 10, marginLeft: 5}}
                                            additionalTextStyle={{fontSize: 15, color: them.text}}
                                            onPress={()=>{
                                            this.props.setdidEat(true);
                                            this.props.setDirty(true);
                                             this.props.setHangry(false);
                                             if (item.id===9)  eatsoda();
                                             if (item.id===8) eatchocolat();
                                             Actions.eat({id:item.id});
                                             }
                                             }
                                            >
                                      {item.title}
                                  </MyButtonChoose>
                              </View>
                          }>
                     </List></Col>
                        <Col>
                            <List dataArray={food2}
                          renderRow={(item) =>
                              <View style={{
                                  marginLeft: 20,
                                  marginRight: 20,
                                  flex: 2,
                                  flexDirection: 'row',
                                  alignItems: 'center'
                              }}>
                                  <MyButtonChoose icon={item.image}
                                            colorstyle={them.green}
                                            additionalStyle={{width:140,height: 60, marginRight: 5, marginLeft: 0}}
                                            additionalTextStyle={{fontSize: 15, color: them.text}}
                                             onPress={()=>{
                                             this.props.setdidEat(true);
                                               this.props.setDirty(true);
                                               this.props.setHangry(false);
                                             if (item.id===9)  this.eatsoda();
                                             if (item.id===8) this.eatchocolat();
                                             Actions.eat({id:item.id});
                                             }
                                             }
                                            >
                                      {item.title}
                                  </MyButtonChoose>
                              </View>
                          }>
                     </List>
                        </Col>
                    </Row>
                         <Row size={2} style={{justifyContent: 'flex-end'}}>
                        <MyButtonIcon colorstyle={them.green} icon={'return'}
                                      additionalStyle={{height: 50, marginRight: 5}} onPress={()=>{Actions.main()}} >عودة</MyButtonIcon>
                    </Row>
</Grid>
                </Container>
        );
    }
}



const mapStateToProps = (state, ownProps) => {

    return {food: state.foodate};
};

export default connect(mapStateToProps, actions)(ChooseFoodActivity);
