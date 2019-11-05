import React from 'react';
import {View, Image,Text,StyleSheet} from 'react-native';
import bk_logo from '../../../../../image/kidneycarelogo.png';
export default class UserProfile extends React.Component{
    render(){

        const styles = StyleSheet.create({
            container: {
                justifyContent: 'center',
                alignItems: 'center',
                height:'100%',
            },
            avatar:{
                width:100,
                height:100,
            },
            name:{
                marginTop:10,
                fontSize:22,
                color:"#808080",
            },
        });
        return(<View styles={styles.container}>
                <Image styles={styles.avatar} source={bk_logo}></Image>
                <Text  style={styles.name}>Nitish Sharma</Text>
            </View>

        );
    }
}
