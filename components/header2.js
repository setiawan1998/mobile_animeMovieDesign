import React, { Component } from 'react';
import {  Header, Left, Body, Button, Item, Input } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../theme/styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
class HeaderComponent extends Component{
    render(){
        return(
            <View style={Styles.viewHeader}>
                <Header searchBar rounded style={[Styles.header]} noShadow>
                    <Item style={{padding: 10, borderRadius: 100}}>
                        <Icon name={this.props.icon} style={[Styles.h1, Styles.redColor]}></Icon>
                        <Input placeholder="Search" />
                        <Icon name="search" style={[Styles.h1, Styles.secondaryColor]}></Icon>
                    </Item>
                </Header>
            </View>
        )
    }
}
export default HeaderComponent;