import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import icon from '../assets/icons/pure-icon.png';
import Expo from 'expo';
import KeysButtons from '../components/KeysButtons';

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string')return image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
  })
}

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Translate',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: (
      <Image 
        source={icon}
        style={styles.imageStyle}
      />
    )
    
  });

  state = {
    appIsReady: false
  }

  componentWillMount(){
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <KeysButtons/>
      </View>
    );
  }
}

export default MainScreen;

const styles = {
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  }
}