import React, { Component } from 'react';
import PTRView from 'react-native-pull-to-refresh';
import { Content, Button} from 'native-base';
import { View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import Styles from '../theme/styles';
import HeaderComponent from '../components/header2';
import StarRating from 'react-native-star-rating';
import LinearGradient from 'react-native-linear-gradient';
import TopBarNav from 'top-bar-nav';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const items = [
    1337,
    'janeway',
];
const Series  = (index) => (
    <Content style={[Styles.content, Styles.flex1, {paddingTop: 15}]}>
    
        <View style={{padding: 5}}>
            <View style={[Styles.viewRow, Styles.list]}>
                <View style={Styles.flex}>
                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={[Styles.seriesSeriesImage]}/>
                </View>
                <View style={[Styles.flex2]}>
                    <View style={[Styles.viewColumn, Styles.textPaddingLeft, {paddingTop: 0}]}>
                        <View style={Styles.viewItemName}>
                            <Text style={[Styles.itemName, Styles.lightColor]}>Series</Text>
                        </View>
                        <View>
                            <Text style={[Styles.secondaryColor, Styles.h4]}>Score 4.5</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={3.5}
                                starSize={13}
                                containerStyle={{width: '75%'}}
                                fullStarColor="#f1c40f"
                            />
                        </View>
                        <View>
                            <Text style={[Styles.itemCode, Styles.secondaryColor]}>Category</Text>
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
                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={[Styles.seriesSeriesImage]}/>
                </View>
                <View style={[Styles.flex2]}>
                    <View style={[Styles.viewColumn, Styles.textPaddingLeft, {paddingTop: 0}]}>
                        <View style={Styles.viewItemName}>
                            <Text style={[Styles.itemName, Styles.lightColor]}>Series</Text>
                        </View>
                        <View>
                            <Text style={[Styles.secondaryColor, Styles.h4]}>Score 4.5</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={3.5}
                                starSize={13}
                                containerStyle={{width: '75%'}}
                                fullStarColor="#f1c40f"
                            />
                        </View>
                        <View>
                            <Text style={[Styles.itemCode, Styles.secondaryColor]}>Category</Text>
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
                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}} style={[Styles.seriesSeriesImage]}/>
                </View>
                <View style={[Styles.flex2]}>
                    <View style={[Styles.viewColumn, Styles.textPaddingLeft, {paddingTop: 0}]}>
                        <View style={Styles.viewItemName}>
                            <Text style={[Styles.itemName, Styles.lightColor]}>Series</Text>
                        </View>
                        <View>
                            <Text style={[Styles.secondaryColor, Styles.h4]}>Score 4.5</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={3.5}
                                starSize={13}
                                containerStyle={{width: '75%'}}
                                fullStarColor="#f1c40f"
                            />
                        </View>
                        <View>
                            <Text style={[Styles.itemCode, Styles.secondaryColor]}>Category</Text>
                        </View>
                    </View>
                </View>
                <View style={[Styles.flex, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                    <Icon name="chevron-right" style={[Styles.h1, Styles.secondaryColor]}/>
                </View>
            </View>
        </View>
        
    </Content>
);
const Categories  = (index) => (
    <Content style={[Styles.content, Styles.flex1, {paddingTop: 15}]}>
        <FlatGrid
            itemDimension={130}
            items={[
                { category_name: "Action" },
                { category_name: "Adventure" },
                { category_name: "Romance" },
                { category_name: "Magic" },
                { category_name: "Soul" },
            ]}
            style={[Styles.gridView]}
            renderItem={({ item }) => (                 
                <LinearGradient start={{x: 0, y: 1.0}} end={{x: 1.0, y: 0}} colors={['#091a46', '#3498db']} style={{borderRadius: 5}}>
                    <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w300/iy3mQuTpGuTSfEMo91PdOiG0nbw.jpg'}}
                        style={{flex: 1, padding: 10, borderRadius: 5, opacity: .7}}
                        imageStyle={{ borderRadius: 5 }}
                    >   
                        <Text style={[Styles.h3, Styles.lightColor, {opacity: 1}]}>{item.category_name}</Text>
                    </ImageBackground>
                </LinearGradient>
            )}
        />
    </Content>
);
const ROUTES = {
	Series,
	Categories
};
const ROUTESTACK = [
	{ element: <Text style={Styles.primaryColor}>SERIES</Text>, title: 'Series' },
	{ element: <Text style={Styles.primaryColor}>CATEGORIES</Text>, title: 'Categories' }
];
seriesScreen = (props) => {
    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve()}, 2000)
        })
    }
    return(
        <PTRView onRefresh={_refresh} style={Styles.container}>  
            <View style={{flex: 1, position: 'relative'}}>
                <ScrollView>
                    <HeaderComponent icon="subscriptions" title="Series"/>
                    <View style={Styles.noSwipper}/>
                    <Content style={[Styles.content, {paddingTop: 20}]}>
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
export default seriesScreen;