import React, { Component } from 'react';
import PTRView from 'react-native-pull-to-refresh';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { View, Text, ScrollView} from 'react-native';
import { Content } from 'native-base';
import Styles from '../theme/styles';
import HeaderComponent from '../components/header2';
import { withNavigation } from 'react-navigation';
const items = [
    1337,
    'janeway',
];
notificationScreen = (props) => {
    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve()}, 2000)
        })
    }
    return(
        <PTRView onRefresh={_refresh} style={Styles.container}>
            <View style={{flex: 1, position: 'relative'}}>
                <ScrollView>
                    <HeaderComponent icon="notifications" title="Notification"/>
                    <View style={Styles.noSwipper}/>
                    <Content style={[Styles.content, {paddingTop: 20}]}>
                        <View style={{padding: 5}}>
                            <View style={[Styles.viewRow, Styles.list]}>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="clear" style={[Styles.h1, Styles.redColor]}/>
                                </View>
                                <View style={[Styles.flex2, { padding: 10 }]}>
                                    <Text style={[Styles.h2, Styles.lightColor]}>Series</Text>
                                    <Text style={[Styles.secondaryColor]}>Lorem ipsum lorem ipsum lorem ipsum</Text>
                                </View>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="chevron-right" style={[Styles.h1, Styles.secondaryColor]}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding: 5}}>
                            <View style={[Styles.viewRow, Styles.list]}>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="clear" style={[Styles.h1, Styles.redColor]}/>
                                </View>
                                <View style={[Styles.flex2, { padding: 10 }]}>
                                    <Text style={[Styles.h2, Styles.lightColor]}>Series</Text>
                                    <Text style={[Styles.secondaryColor]}>Lorem ipsum lorem ipsum lorem ipsum</Text>
                                </View>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="chevron-right" style={[Styles.h1, Styles.secondaryColor]}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding: 5}}>
                            <View style={[Styles.viewRow, {padding: 5, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 5}]}>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="clear" style={[Styles.h1, Styles.redColor]}/>
                                </View>
                                <View style={[Styles.flex2, { padding: 10 }]}>
                                    <Text style={[Styles.h2, Styles.lightColor]}>Series</Text>
                                    <Text style={[Styles.secondaryColor]}>Lorem ipsum lorem ipsum lorem ipsum</Text>
                                </View>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="chevron-right" style={[Styles.h1, Styles.secondaryColor]}/>
                                </View>
                            </View>
                        </View>
                    </Content>
                </ScrollView>
            </View>
        </PTRView>
    )
}
export default notificationScreen;