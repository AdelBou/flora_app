import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button, Thumbnail} from 'native-base';
import Flora from './components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {MyButtonIcon, BorderedText} from "./components/common";
import them from "../static/colors/colors";
import AutoHeightImage from 'react-native-auto-height-image';
import {Actions} from 'react-native-router-flux';

export default class AboutActivity extends Component {

    render() {


        return (

            <Container style={{backgroundColor: them.background}}>
                <Grid style={{justifyContent: 'center'}}>
                    <Row size={1} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <BorderedText colorstyle={them.pink} additionalTextStyle={{fontSize: 30, fontWeight: 'bold'}}>حول
                            التطبيق</BorderedText>
                    </Row>
                    <Row size={1} style={{justifyContent: 'center'}}>
                        <BorderedText colorstyle={them.blue} additionalTextStyle={{fontSize: 14, fontWeight: 'bold'}}>هذا
                            العمل من
                            إنتاج طالبات طب الأسنان بجامعة الملك سعود لـ: </BorderedText>
                    </Row>
                    <Row size={2}>
                        <View style={styles.layout}>
                            <Text style={styles.textStyle}>سارة الجبرين</Text>
                            <Text style={styles.textStyle}>بشاير الموسى</Text>
                            <Text style={styles.textStyle}>إيمان بن صالح</Text>
                            <Text style={styles.textStyle}>نوف الزعاقي</Text>
                        </View>
                        <View style={styles.layout}>
                            <Text style={styles.textStyle}>أمجاد المواش</Text>
                            <Text style={styles.textStyle}>دانية المنيع</Text>
                            <Text style={styles.textStyle}>نورة اليابس</Text>
                            <Text style={styles.textStyle}>سارة العايذي</Text>
                            <Text style={styles.textStyle}>دلال الحربي</Text>
                        </View>
                    </Row>
                    <Row size={1} style={{justifyContent: 'center'}}>
                        <BorderedText colorstyle={them.blue} additionalTextStyle={{fontSize: 15, fontWeight: 'bold'}}>تحت
                            إشراف الدكتورات: </BorderedText>
                    </Row>
                    <Row size={2}>
                        <View style={styles.layout}>
                            <Text style={styles.textStyle}>د.البندري الجميل</Text>
                            <Text style={styles.textStyle}>د.نادية نحاس</Text>
                            <Text style={styles.textStyle}>د.هبة حمدان</Text>
                            <Text style={styles.textStyle}>د.أشواق العتيبي</Text>
                        </View>

                    </Row>
                    <Row size={1} style={{justifyContent: 'center'}}>
                        <BorderedText colorstyle={them.blue} additionalTextStyle={{fontSize: 15, fontWeight: 'bold'}}>
                            بدعم
                            من: </BorderedText>
                    </Row>
                    <Row size={1} style={[styles.layout,{padding:0}]}>
                        <View style={[{padding:5,flex: 1,
                            justifyContent: 'space-between',flexDirection:'row',
                            alignItems: 'center'}]} >

                            <AutoHeightImage   source={require('../static/about/sa.png')}
                                        width={100} style={{marginLeft:2,marginRight:2}}    />
                            <AutoHeightImage   source={require('../static/about/tp.png')}
                                        width={55} style={{marginLeft:2,marginRight:2}}    />
                            <AutoHeightImage    source={require('../static/about/gol.png')}
                                         width={100}  style={{marginLeft:2,marginRight:2}}  />

                            <AutoHeightImage   square source={require('../static/about/almara3i.png')}
                                 style={{marginLeft:2,marginRight:2}}            width={60} />
                        </View>
                    </Row>
                    <Row size={1} style={{justifyContent: 'center'}}>
                        <MyButtonIcon colorstyle={them.green} icon={'return'}
                                      additionalStyle={{height: 60, width: 80, marginBottom: 10}} onPress={() => {
                            Actions.main()
                        }}>عودة</MyButtonIcon>

                    </Row>
                </Grid>
            </Container>

        );
    }
}

const styles = {

    layout: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
        backgroundColor: them.green,
        margin: 5,
        padding: 20,
        borderRadius: 5,
        borderColor: '#39484F', borderWidth: 2,
    },
    textStyle: {
        fontSize: 15,
        color: them.text
    },
    buttonslayout: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    centerButtonLayout: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};

