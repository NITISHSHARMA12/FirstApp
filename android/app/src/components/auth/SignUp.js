import React, {Component} from 'react';
import {View,ScrollView, Text, Image, StyleSheet,Alert} from 'react-native';
import logo from '../../../../../image/rangoli-stamp.png';
import bk_logo from '../../../../../image/kidneycarelogo.png';
import { Button, Form, Item, Input ,Label} from 'native-base';
export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            formValue:{

            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        let that=this;
        that.setState({
            userData:that.state.formValue,
        },function () {
            if (that.state.userData){
                let userName=that.state.userData.name;
                Alert.alert("Hi,",userName);
            }
        })
    };
    onChangeFormItem=(key,value)=>{
        let {formValue} =this.state;
        formValue[key]=value;
        this.setState({
            formValue
        });
    };
    render(){
        console.log(this.state)
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={{alignItems:'center',
                        justifyContent: 'center',}}>
                        <Image style={styles.logo} source={bk_logo}/>
                        <Text style={styles.rangoliHeading}>Rangoli Stamp</Text>
                    </View>
                    <View style={{alignItems:'center',paddingTop:10,}}>
                        <Form >
                            <Item floatingLabel style={styles.userName}>
                                <Label style={styles.inputLabel}>Name</Label>
                                <Input style={styles.inputStyle} onChangeText={(value)=>this.onChangeFormItem('name',value)}/>
                            </Item>

                            <Item floatingLabel style={styles.userName}>
                                <Label style={styles.inputLabel}>Email</Label>
                                <Input style={styles.inputStyle} onChangeText={(value)=>this.onChangeFormItem('email',value)}/>
                            </Item>

                            <Item floatingLabel style={styles.userName} >
                                <Label style={styles.inputLabel}>Password</Label>
                                <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(value)=>this.onChangeFormItem('pass',value)}/>
                            </Item>

                            <Item floatingLabel style={styles.userName} >
                                <Label style={styles.inputLabel}>Confirm Password</Label>
                                <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(value)=>this.onChangeFormItem('c_pass',value)}/>
                            </Item>
                            <View style={{marginTop: 30}}>
                                <Button  transparent  rounded style={{justifyContent: 'center'}} danger  onPress={this.handleSubmit}><Text style={{color:'#fff',fontSize: 20}}>Sign Up</Text></Button>
                            </View>
                        </Form>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#46347e',

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

