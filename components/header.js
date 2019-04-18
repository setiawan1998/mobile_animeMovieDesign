import React, { Component } from 'react';
import {  Header, Left, Body, Right, Button } from 'native-base';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../theme/styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
class HeaderComponent extends Component{
    render(){
        return(
            <View style={Styles.viewHeader}>
                <Header style={Styles.header} noShadow>
                <Left>
                    <TouchableOpacity onPress={this.props.click}>
                        <Icon name={this.props.icon} style={[Styles.h1, Styles.lightColor]}></Icon>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={[Styles.lightColor, Styles.h1]}>{this.props.title}</Text>
                </Body>
                <Right>
                    {
                        this.props.search == "true" ? 
                            <TouchableOpacity onPress={this.props.click}>
                                <Icon name="search" style={[Styles.h1, Styles.lightColor]}></Icon>
                            </TouchableOpacity> : 
                            <TouchableOpacity onPress={this.props.click}>
                                <Icon name="arrow-forward" style={[Styles.h1, Styles.lightColor]}></Icon>
                            </TouchableOpacity>
                    }
                </Right>
                </Header>
            </View>
        )
    }
}
export default HeaderComponent;