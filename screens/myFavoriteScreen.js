import React, { Component } from 'react';
import PTRView from 'react-native-pull-to-refresh';
import { Content } from 'native-base';
import { View, Text, ScrollView, Image } from 'react-native';
import Styles from '../theme/styles';
import HeaderComponent from '../components/header2';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const items = [
    1337,
    'janeway',
];
myFavoriteScreen = (props) => {
    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve()}, 2000)
        })
    }
    return(
        <PTRView onRefresh={_refresh} style={Styles.container}>
            <View style={{flex: 1, position: 'relative'}}>
                <ScrollView>
                    <HeaderComponent icon="favorite" title="My Favorites"/>
                    <View style={Styles.noSwipper}/>
                    <Content style={[Styles.content, {paddingTop: 20}]}>
                        <View style={{padding: 5}}>
                            <View style={[Styles.viewRow, Styles.list]}>
                                <View style={Styles.flex}>
                                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={{width: 70, height: 70, borderRadius: 5}}/>
                                </View>
                                <View style={[Styles.flex2]}>
                                    <View style={[Styles.viewColumn, Styles.textPaddingLeft, {paddingTop: 0}]}>
                                        <View style={Styles.viewItemName}>
                                            <Text style={[Styles.itemName, Styles.lightColor]}>Series</Text>
                                        </View>
                                        <View>
                                            <Text style={[Styles.itemCode, Styles.redColor]}>Category</Text>
                                        </View>
                                        <View>
                                            <Text style={[Styles.itemCode, Styles.secondaryColor, {flexDirection: 'row',flexWrap: 'wrap'}]}>Description lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <Icon name="chevron-right" style={[Styles.h1, Styles.secondaryColor]}/>
                                </View>
                            </View>
                        </View>

                        <View style={{padding: 5}}>
                            <View style={[Styles.viewRow, Styles.list]}>
                                <View style={Styles.flex}>
                                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={{width: 70, height: 70, borderRadius: 5}}/>
                                </View>
                                <View style={[Styles.flex2]}>
                                    <View style={[Styles.viewColumn, Styles.textPaddingLeft, {paddingTop: 0}]}>
                                        <View style={Styles.viewItemName}>
                                            <Text style={[Styles.itemName, Styles.lightColor]}>Series</Text>
                                        </View>
                                        <View>
                                            <Text style={[Styles.itemCode, Styles.redColor]}>Category</Text>
                                        </View>
                                        <View>
                                            <Text style={[Styles.itemCode, Styles.secondaryColor, {flexDirection: 'row',flexWrap: 'wrap'}]}>Description lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
                                        </View>
                                    </View>
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
export default myFavoriteScreen;