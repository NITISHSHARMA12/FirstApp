import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../../../../../image/rangoli-stamp.png';
import bk_logo from '../../../../../image/kidneycarelogo.png';
import { Button, Form, Item, Input ,Label,Body,Title,Left,Icon} from 'native-base';
import {Header} from 'react-navigation-stack';
export default class Login extends Component{
    render(){
        /* eslint-disable */

        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={bk_logo}/>
                <Text style={styles.rangoliHeading}>Rangoli Stamp</Text>
                <View style={{flex: 0.50,justifyContent:'flex-start'}}>
                    <Form >
                        <Item floatingLabel style={styles.userName}>
                            <Label style={styles.inputLabel}>User Name</Label>
                            <Input  style={styles.inputStyle}/>
                        </Item>
                        <Item floatingLabel style={styles.userName} >
                            <Label style={styles.inputLabel}>Password</Label>
                            <Input style={styles.inputStyle} secureTextEntry={true}/>
                        </Item>
                        <View style={{flex:2,justifyContent:'center'}}>
                            <Button  transparent  rounded style={{justifyContent: 'center'}} danger><Text style={{color:'#fff',fontSize: 20}}>Login</Text></Button>
                        </View>
                    </Form>
                </View>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#46347e',
        alignItems:'center',
        justifyContent: 'center',
    },
    logo: {
        width: 175,
        height: 175,
        marginBottom:5
    },
    rangoliHeading: {
        color:'#fff',
        fontSize:20,
        fontFamily:'Arial',
        fontWeight: 'bold',
        alignSelf:'center'
    },
    btnSign: {

    },
    login: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    },
    userName:{
        borderWidth:4,
        width: 300,
        borderBottomColor:'#42f5c5',
    },
    inputLabel:{
        color:'#e829c0',

    },
    inputStyle:{
        color:'#ffff',

    },
});
