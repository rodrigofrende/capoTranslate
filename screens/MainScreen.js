import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';
import icon from '../assets/icons/pure-icon.png';
import Expo from 'expo';
import { Provider } from 'react-redux';
import store from '../store';
import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import ViewChordsButton from '../components/ViewChordsButton';
import CapoKey from '../components/CapoKey';
import ChordsModal from '../modals/ChordsModal';

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
    //debugger revisar porque tira undefined , y la imagen es un 24 ???? s
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
  }

  render() {
    const { containerStyle , dividerStyle , buttonContainerStyle} = styles;

    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <ChordsModal />
          <View style={containerStyle}>
            <KeysButtons/>
            <Divider style={dividerStyle}/>
            <CapoButtons/>
            <Divider style={dividerStyle}/>
            <CapoKey/>
          </View>   
          <ViewChordsButton style={buttonContainerStyle}/>    
        </View>
      </Provider>
      
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
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dividerStyle: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#2196F3'
  },
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
};


