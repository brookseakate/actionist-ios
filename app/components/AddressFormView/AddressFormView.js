// package imports
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
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
    AsyncStorage.setItem('userAddress', this.state.text, this._fetchOfficials())
  };

  // @TODO - move the fetch method to action views (via helper)
  _fetchOfficials = () => {
    // @TODO - implement this method
    Alert.alert(
      'This will send address to Google Civic API.\nAddress:',
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
