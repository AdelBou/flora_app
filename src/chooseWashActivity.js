import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, List, Content, Badge, Icon, Button, ListItem} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {MyButtonIcon, BorderedText} from "./components/common";
import MyButton from "./components/common/myButton";
import MyButtonChoose from './components/common/myButtonChoose';
import them from "../static/colors/colors";
import washDo from "../static/data/datawash";
import { Actions } from 'react-native-router-flux';
import * as actions from './myredux/myactions/myactions';
import {connect} from 'react-redux';

 class ChooseWashActivity extends Component {
    render() {
        return (
                <Container style={{backgroundColor: them.background}}>
                     <View  style={{justifyContent: 'center', alignItems: 'center',margin:10}} >
                            <BorderedText colorstyle={them.pink} additionalTextStyle={{fontSize: 30, fontWeight: 'bold'}} >تنظيف الاسنان</BorderedText>
                     </View>
                     <View  style={{justifyContent: 'center', alignItems: 'center',margin:10}} >
                    <List dataArray={washDo}
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
                                            additionalStyle={{height: 80,width:180, marginRight: 10, marginLeft: 10,
                                            marginBottom:20}}
                                            additionalTextStyle={{fontSize: 18, color: them.text}}
                                                onPress={()=>{
                                                    this.props.setDirty(false);
                                                    Actions.wash({id:item.id})}}>
                                      {item.title}
                                  </MyButtonChoose>
                              </View>
                          }>
                    </List>
                              </View>
                       <Row style={{justifyContent: 'flex-end'}}>
                        <MyButtonIcon colorstyle={them.green} icon={'return'}
                                      additionalStyle={{height: 70,width:70, marginRight: 15}} onPress={()=>{Actions.main()}} >عودة</MyButtonIcon>
                    </Row>
                </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const progress = state.progress;
    return {progressValue: progress};
};

export default connect(mapStateToProps, actions)(ChooseWashActivity);
