// package imports
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

// relative imports
import styles from '../../styles';

export default class AddressFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  };

  _submitAddress = () => {
    // @TODO - add awaits?
    AsyncStorage.setItem('userAddress', this.state.text, this._fetchOfficials())
  };

  _fetchOfficials = () => {
    Alert.alert(
      'This will send address to Google Civic API.\nAddress:',
      // AsyncStorage.getItem('address'),
      this.state.text,
      [
        { text: 'OK', onPress: () => this.props.navigator.pop() },
      ]
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Enter Address to Find Your Elected Officials
        </Text>
        <TextInput
          style={styles.textInputField}
          placeholder='Enter full address'
          onChangeText={(text) => this.setState({text})}
          returnKeyType='search'
          onSubmitEditing={(text) => this._submitAddress({text})}
        />
      </View>
    )
  }
}
