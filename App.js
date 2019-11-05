import React, {Component} from 'react';
import Home from './android/app/src/components/pages/Home';
import Login from './android/app/src/components/auth/Login';
import SignUp from './android/app/src/components/auth/SignUp';
import UserProfile from './android/app/src/components/pages/UserProfile';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class App extends Component{
  render() {
    /* eslint-disable */

      const RootStack = createStackNavigator(
          {
              Home: Home,
              SignUpScreen:SignUp,
              LoginScreen: Login,
              UserProfile:UserProfile,
          },
          {
              headerMode:'none',
              initialRouteName: 'Home',
          }
      );
      const AppContainer = createAppContainer(RootStack);
      return (
            <AppContainer/>

    );
  }
}

