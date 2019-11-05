import React, { Component } from 'react';
import {View ,Text,Image,StyleSheet,StatusBar } from 'react-native';
import {Button} from 'native-base';
import logo from '../../../../../image/rangoli-stamp.png';
import bk_logo from '../../../../../image/kidneycarelogo.png';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
          hi:'nitish',
        };
        // this.login = this.login.bind(this);
    }
    componentDidMount() {
        console.log(this.state)
    }


    signUp=()=>{
        let that=this;
        that.props.navigation.navigate('SignUpScreen');
    };

    login=()=>{
        let that=this;
        that.props.navigation.navigate('LoginScreen');
    };

    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#46347e'}/>
                <View  style={{flex: 0.60,justifyContent:'flex-end'}}>
                    <Image style={styles.logo} source={bk_logo}/>
                    <Text style={styles.rangoliHeading}>Rangoli Stamp</Text>
                </View>

                <View flex={0.50} style={{alignSelf:'stretch',marginTop:40}}>
                    <Button bordered light rounded  style={{marginTop: 20,justifyContent: 'center',marginRight:10,marginLeft:10}} onPress={this.signUp}>
                        <Text style={styles.rangoliHeading}>Sign Up</Text>
                    </Button>

                    <Button bordered light rounded  style={{marginTop: 20,justifyContent: 'center',marginRight:10,marginLeft:10}} onPress={this.login}>
                        <Text style={styles.rangoliHeading}>Log In</Text>
                    </Button>
                </View>





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
        alignSelf:'center',
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
        backgroundColor: 'green'
    },
});
