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
    // console.log(Environment.username + ':' + Environment.password); // NOTE: log

    const local_api = 'http://localhost:5000/api/v1.0/actions';
    // const remote_api = 'http://development-env.rncssstzgb.us-west-2.elasticbeanstalk.com/api/v1.0/actions';
    const remote_api = 'http://actionistapp.com/api/v1.0/actions';

    console.log(req_object); // NOTE: log

    fetch(remote_api, req_object)
    .then((response) => response.json())
    .then((responseData) => {
      // Alert.alert(
      //   "GET Response",
      //   "Data: " + responseData.call_actions[0]["headline"]
      // ) // NOTE: debug
      this._loadActionList(responseData)
    })
    .catch((error) => {
      console.error(error);
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
      // Alert.alert('Button has been pressed!'); // NOTE: log

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
