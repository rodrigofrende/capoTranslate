import React, { Component} from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';

class ViewChordsButton extends Component {
    render(){
        return(
            //this.props.style toma el style que le paso al componente en el mainScreen (buttonContainerStyle) a la vez esta definido como constante en el mismo 
            <View style={this.props.style}> 
                <Button 
                    raised 
                    icon={{ name: 'library-music'}}
                    title="Ver Acorde"
                    backgroundColor = "#2196F3"
                    onPress = {() => this.props.openChordsModal()} 
                />
            </View>
        );
    }
}

export default connect(null, { openChordsModal })(ViewChordsButton)