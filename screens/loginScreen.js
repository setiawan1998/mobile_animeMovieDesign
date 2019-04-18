import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Container ,Content, Form, Item, Input, Label, Button } from 'native-base';
import Styles from '../theme/styles';
import LinearGradient from 'react-native-linear-gradient';
import Hr from "react-native-hr-component";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

loginScreen = (props) => {
            return(
                <Container style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }}>
                <ImageBackground source={{uri: 'https://images6.alphacoders.com/656/thumb-1920-656029.png'}} style={Styles.container}>                
                    <LinearGradient colors={['rgba(48, 51, 107,0.8)', 'rgba(19, 15, 64,0.9)']} style={Styles.flex1}>
                        <Content style={[Styles.content, Styles.flex1, {paddingTop: 15}]}>
                            <View style={{padding: 5}}>
                                <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('Index') }}><Text>Logo</Text></TouchableOpacity>                                
                                </View>
                            </View>
                            <Form>
                                <View style={{padding: 5}}>
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                        <Item floatingLabel>
                                            <Label style={[Styles.redColor, Styles.h3]}>Email</Label>
                                            <Input keyboardType='email-address' style={[Styles.lightColor, Styles.h2]}/>
                                        </Item>
                                    </View>
                                </View>
                                <View style={{padding: 5}}>
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                        <Item floatingLabel>
                                            <Label style={[Styles.redColor, Styles.h3]}>Password</Label>
                                            <Input secureTextEntry={true} style={[Styles.lightColor, Styles.h2]}/>
                                        </Item>
                                    </View>
                                </View>
                                <View style={{padding: 5}}>
                                    <View style={[Styles.flex1, { flexDirection: 'row',justifyContent: 'flex-end', padding: 10 }]}>
                                        <Text style={[Styles.lightColor, Styles.h3]}>Forgot Password</Text>
                                    </View>
                                </View>
                                <View style={{padding: 5}}>
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingTop: 10, paddingRight: 20 }]}>
                                        <Button small full style={{borderRadius: 100, backgroundColor: '#fff'}}>
                                            <Text style={[Styles.redColor, Styles.h3]}>Login</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{padding: 5}}>
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingTop: 0, paddingRight: 20 }]}>
                                        <Hr lineColor="#fff" width={1} text="OR" textStyles={{color: '#fff'}} />
                                    </View>
                                </View>
    
                                <View style={[Styles.viewRow]}>                                
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center',padding: 10 }]}>
                                        <Button small primary full style={{borderRadius: 100}}>
                                            <Icon name="facebook-f" style={[Styles.h3, Styles.lightColor]}/>
                                            <Text style={[Styles.h3, Styles.lightColor]}> Facebook</Text>
                                        </Button>
                                    </View>
                                    <View style={[Styles.flex1, { justifyContent: 'center', alignItems: 'center', padding: 10 }]}>
                                        <Button small danger full style={{borderRadius: 100}}>
                                            <Icon name="google" style={[Styles.h3, Styles.lightColor]}/>
                                            <Text style={[Styles.h3, Styles.lightColor]}> Google</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Form>
                        </Content>
                    </LinearGradient>
                </ImageBackground>
                </Container>
            )
}
export default loginScreen;