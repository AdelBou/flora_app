import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Container, Header, Content, Badge, Icon, Button} from 'native-base';
import Flora from './src/components/flora';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {MyButton, ProgressBar, MyButtonIcon, BorderedText} from "./src/components/common";
import MainActivity from "./src/mainActivity";
import DentistActivity from "./src/dentistActivity";
import them from './static/colors/colors';

import PlayActivity from "./src/playActivity";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import WashActivity from './src/washActivity';
import reducers from './src/myredux/reducers';
import ChooseFoodActivity from "./src/chooseFoodActivity";
import ChooseWashActivity from "./src/chooseWashActivity";
import AboutActivity from "./src/aboutActivity";
import {Router, Scene} from 'react-native-router-flux';
import EatActivity from "./src/eatActivity";

export default class App extends Component {

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Router>
                    <Scene key="root">
                        <Scene key="main"
                               component={MainActivity}
                               title="Main Screen"
                               initial
                               hideNavBar={true}
                        />
                        <Scene
                            key="play"
                            component={PlayActivity}
                            title="Play"
                            hideNavBar={true}
                        />
                            <Scene
                            key="dentist"
                            component={DentistActivity}
                            title="dentist"
                            hideNavBar={true}
                        />
                            <Scene
                            key="chooseFood"
                            component={ChooseFoodActivity}
                            title="choose food"
                            hideNavBar={true}
                        />
                            <Scene
                            key="chooseWash"
                            component={ChooseWashActivity}
                            title="Play"
                            hideNavBar={true}
                        />
                        <Scene
                            key="about"
                            component={AboutActivity}
                            title="about"
                            hideNavBar={true}
                        />
                           <Scene
                            key="wash"
                            component={WashActivity}
                            title="wash"
                            hideNavBar={true}
                        />
                                 <Scene
                            key="eat"
                            component={EatActivity}
                            title="eat"
                            hideNavBar={true}
                        />
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
