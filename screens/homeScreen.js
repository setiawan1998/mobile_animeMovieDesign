import React, { Component } from 'react';
import PTRView from 'react-native-pull-to-refresh';
import { Content, Button } from 'native-base';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import Styles from '../theme/styles';
import HeaderComponent from '../components/header';
import SearchBar from 'react-native-searchbar'; 
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import StarRating from 'react-native-star-rating';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const items = [
    1337,
    'janeway',
];
HomeScreen = (props) => {
    _refresh = () => {
        return new Promise((resolve) => {
            setTimeout(() => {resolve()}, 2000)
        })
    }
    _search = () => {
        this.searchBar.show();
    }
    return(
        <PTRView onRefresh={_refresh} style={Styles.container}>
            <View style={{flex: 1, position: 'relative'}}>
                <SearchBar
                    ref={(ref) => searchBar = ref}
                    data={items}
                />
                <ScrollView>
                    <View>
                        <HeaderComponent icon="ondemand-video" title="" click={_search} search="true"/>                                
                            <Swiper style={Styles.swipper} activeDotColor="#ffffff" autoplay={true} autoplayTimeout={5}>
                                <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={Styles.slideImage}>             
                                    <LinearGradient colors={['rgba(0, 168, 255,0.5)', 'rgba(25, 42, 86,0.9)']} style={[Styles.flex1, {alignItems: 'center', justifyContent: 'center'}]}>
                                        <Text style={[Styles.h1, Styles.lightColor]}>Hello Swiper</Text>
                                        <Text style={[Styles.h3, Styles.lightColor]}>Hello Swiper</Text>
                                        <View>
                                            <Button style={Styles.itemPlay}>
                                                <Icon style={Styles.redColor} name="play-arrow"/>
                                                <Text style={Styles.redColor}> Play </Text>
                                            </Button>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                                <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={Styles.slideImage}>             
                                    <LinearGradient colors={['rgba(0, 168, 255,0.5)', 'rgba(25, 42, 86,0.9)']} style={[Styles.flex1, {alignItems: 'center', justifyContent: 'center'}]}>
                                        <Text style={[Styles.h1, Styles.lightColor]}>Beautiful</Text>
                                        <Text style={[Styles.h3, Styles.lightColor]}>Hello Swiper</Text>
                                        <View>
                                            <Button style={Styles.itemPlay}>
                                                <Icon style={Styles.redColor} name="play-arrow"/>
                                                <Text style={Styles.redColor}> Play </Text>
                                            </Button>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                                <ImageBackground source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={Styles.slideImage}>             
                                    <LinearGradient colors={['rgba(0, 168, 255,0.5)', 'rgba(25, 42, 86,0.9)']} style={[Styles.flex1, {alignItems: 'center', justifyContent: 'center'}]}>
                                        <Text style={[Styles.h1, Styles.lightColor]}>And simple</Text>
                                        <Text style={[Styles.h3, Styles.lightColor]}>Hello Swiper</Text>
                                        <View>
                                            <Button style={Styles.itemPlay}>
                                                <Icon style={Styles.redColor} name="play-arrow"/>
                                                <Text style={Styles.redColor}> Play </Text>
                                            </Button>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </Swiper>
                        <Content style={Styles.content}>
                            <Text style={[Styles.secondaryColor, Styles.h3, Styles.textPaddingLeft]}>TRENDING</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={[Styles.seriesContainer]}>
                                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={[Styles.seriesImage]}/>
                                    <View style={[Styles.viewColumn]}>
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
                                            <Text style={Styles.itemCode}>Category</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[Styles.seriesContainer]}>
                                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={[Styles.seriesImage]}/>
                                    <View style={[Styles.viewColumn]}>
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
                                            <Text style={Styles.itemCode}>Category</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[Styles.seriesContainer]}>
                                    <Image source={{uri: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg'}} style={[Styles.seriesImage]}/>
                                    <View style={[Styles.viewColumn]}>
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
                                            <Text style={Styles.itemCode}>Category</Text>
                                        </View>
                                    </View>
                                </View>

                            </ScrollView>
                            <Text style={[Styles.secondaryColor, Styles.h3, Styles.textPaddingLeft]}>NEW RELEASE</Text>
                            <FlatGrid
                                itemDimension={130}
                                items={[
                                    { series: "Naruto", title: "episode 1", img_url: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg', views: '100' },
                                    { series: "Naruto", title: "episode 1", img_url: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg', views: '100' },
                                    { series: "Naruto", title: "episode 1", img_url: 'https://image.tmdb.org/t/p/w300/aE9tn1UwsS4G1QuS0l6BgOtY446.jpg', views: '100' },
                                ]}
                                style={Styles.gridView}
                                renderItem={({ item }) => (
                                    <View style={Styles.itemContainer}>
                                        <Image source={{uri: item.img_url}} style={Styles.itemImage}/>
                                        <Button small transparent style={Styles.itemViews}>
                                            <Icon name="remove-red-eye" style={[ Styles.primaryColor, Styles.h4]}/>
                                            <Text style={[ Styles.primaryColor, Styles.h4]}> {item.views}</Text>
                                        </Button>
                                        <View style={[Styles.viewRow]}>
                                            <View style={Styles.itemLeft}>
                                                <Text style={[Styles.itemName, Styles.lightColor]}>{item.series}</Text>
                                                <Text style={Styles.itemCode}>{item.title}</Text>
                                            </View>
                                            <View style={Styles.itemRight}>
                                                <Button style={Styles.itemPlay}>
                                                    <Icon style={Styles.redColor} name="play-arrow"/>
                                                    <Text style={Styles.redColor}> Play </Text>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </Content>
                    </View>
                </ScrollView>
            </View>
        </PTRView>
    )
}
export default HomeScreen;