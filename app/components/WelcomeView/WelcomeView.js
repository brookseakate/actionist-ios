// package imports
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import base64 from 'base-64';

// relative imports
import Environment from '../../config/environment';
import styles from '../../styles';
import AlertListView from '../AlertListView/AlertListView';

export default class WelcomeView extends Component {
  _getActionsFromAPI = () => {
    const req_object = {
      method: 'GET',
      headers: {
        'Authorization': 'Basic '+ base64.encode(Environment.username + ':' + Environment.password),
        "Content-Type": "application/json"
        },
    };

    const local_api = 'http://localhost:5000/api/v1.0/actions';
    const remote_api = 'https://actionistapp.com/api/v1.0/actions';

    fetch(remote_api, req_object)
    .then((response) => response.json())
    .then((responseData) => {
      this._loadActionList(responseData)
    })
    .catch((error) => {
      // console.error(error); // NOTE: log
    })
    .done();
  };

  _loadActionList = (response) => {
    this.props.navigator.push({
      title: 'Actions',
      component: AlertListView,
      passProps: { action_list: response.actions }
    });
  };

  render () {
    const onButtonPress = () => {
      this._getActionsFromAPI()
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {'\n'}
          Actionist
        </Text>
        <Button
          color='skyblue'
          title="Take Action!"
          onPress={ onButtonPress }
          accessibilityLabel="Tap to enter app" />
      </View>
    );
  }
}
