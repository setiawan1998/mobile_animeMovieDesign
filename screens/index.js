import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './homeScreen';
import seriesScreen from './seriesScreen';
import myFavoriteScreen from './myFavoriteScreen';
import myProfileScreen from './myProfileScreen';
import notificationScreen from './notificationScreen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Index = createBottomTabNavigator(
  {
    home: HomeScreen,
    series: seriesScreen,
    favorite: myFavoriteScreen,
    notification: notificationScreen,
    profile: myProfileScreen,
  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon : ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if(routeName == "home"){
          iconName = 'ondemand-video';
        }
        else if(routeName == "series"){
          iconName = 'subscriptions';
        }
        else if(routeName == "favorite"){
          iconName = 'favorite';
        }
        else if(routeName == "notification"){
          iconName = 'notifications';
        }
        else if(routeName == "profile"){
          iconName = 'person';
        }
        return <Icon name={iconName} size={25} color={tintColor}/>
      }
    }),
    tabBarOptions: {
      activeTintColor: '#e74c3c',
      inactiveTintColor: '#7f8fa6',
      showLabel: false,
      style: {
        backgroundColor: '#091a46',
        shadowColor: 'transparent',
        shadowRadius: 0
      }
    }
  }
)

export default createAppContainer(Index);