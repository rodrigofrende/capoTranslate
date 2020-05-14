import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import store from './store';
import MainScreen from './screens/MainScreen';

class HomeScreen extends Component {
  render() {
    

    return (
      <Provider store={store}>
        <MainNavigator></MainNavigator>
      </Provider>
    );
  }
}

const MainNavigator = createStackNavigator({
  Main: { screen: MainScreen}
});

export default createAppContainer(MainNavigator);


