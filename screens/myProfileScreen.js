import React, { Component } from 'react';
import PTRView from 'react-native-pull-to-refresh';
import { Content } from 'native-base';
import { View, Text, ScrollView, ImageBackground} from 'react-native';
import Styles from '../theme/styles';
import HeaderComponent from '../components/header';
import TopBarNav from 'top-bar-nav';
import { withNavigation } from 'react-navigation';
import UserAvatar from 'react-native-user-avatar';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


const Profile  = (index) => (
    <Content style={[Styles.content, Styles.flex1, {paddingTop: 15}]}>
        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="person" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex3, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>Name</Text>
                </View>
            </View>
        </View>

        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="email" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex3, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>email@email.com</Text>
                </View>
            </View>
        </View>

        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="security" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex3, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>Verified</Text>
                </View>
            </View>
        </View>

        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="favorite" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex3, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>12</Text>
                </View>
            </View>
        </View>
    </Content>
);
const Settings  = (index) => (
    <Content style={[Styles.content, Styles.flex1, {paddingTop: 15}]}>
        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="notifications" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex2, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>Notifications</Text>
                </View>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='#3498db'
                        offColor='#30336b'
                        size='small'
                        onToggle={ (isOn) => alert('changed to : ', isOn) }
                    />
                </View>
            </View>
        </View>

        <View style={{padding: 5}}>
            <View style={[Styles.viewRow]}>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="ondemand-video" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
                <View style={[Styles.flex2, { padding: 10 }]}>
                    <Text style={[Styles.h3, Styles.lightColor]}>Recommendation</Text>
                </View>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <ToggleSwitch
                        isOn={false}
                        onColor='#3498db'
                        offColor='#30336b'
                        size='small'
                        onToggle={ (isOn) => alert('changed to : ', isOn) }
                    />
                </View>
            </View>
        </View>
    </Content>
);
const ROUTES = {
	Profile,
	Settings
};
const ROUTESTACK = [
	{ element: <Text style={Styles.primaryColor}>PROFILE</Text>, title: 'Profile' },
	{ element: <Text style={Styles.primaryColor}>SETTINGS</Text>, title: 'Settings' }
];
myProfileScreen = (props) => {
    
    _logout = () => {
        props.navigation.navigate('LoginScreen');
    }
    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve()}, 2000)
        })
    }
    return(
        <PTRView onRefresh={_refresh} style={Styles.container}>
            <View>
                <HeaderComponent icon="person" title="" click={_logout} search="false"/>
                <View style={Styles.swipper}>
                    <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={[Styles.slideImage, {alignItems: 'center', justifyContent: 'center'}]}>
                        <UserAvatar size="100" name="Avishay Bar" style={{borderWidth: 3, borderColor: '#fff'}}/>
                        <Text style={[Styles.h1, Styles.lightColor]}>Avishay Bar</Text>
                        <Text style={[Styles.h3, Styles.lightColor]}>avishaybar@email.com</Text>
                    </ImageBackground>
                </View>
                <ScrollView style={{paddingTop: 20}}>
                    <Content style={Styles.content}>
                        <TopBarNav
                            routeStack = { ROUTESTACK }
                            renderScene = {(route, i) => {
                                let Component = ROUTES[route.title];
                                return <Component index={i}/>
                            }}
                            headerStyle = {{
                                backgroundColor: '#192a56',
                                borderBottomWidth: 0
                            }}
                            labelStyle = {{
                                fontSize: 10,
                                fontWeight: '500',
                                color: '#3498db',
                            }}
                            underlineStyle = {{
                                marginTop: 10,
                                height: 2.0,
                                backgroundColor: '#3498db',
                                width: '50%'
                            }}
                            sidePadding={0}
                            inactiveOpacity={0.5}
                            fadeLabels={true}
                        />
                    </Content>
                </ScrollView>
            </View>
        </PTRView>
    )
}
export default withNavigation(myProfileScreen);