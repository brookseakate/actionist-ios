import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import styles from '../../styles'

import AlertListView from '../AlertListView/AlertListView'

export default class WelcomeView extends Component {
  _onForward = () => {
    this.props.navigator.push({
      title: 'Actions',
      component: AlertListView
    });
  }

  render () {
    const onButtonPress = () => {
      // Alert.alert('Button has been pressed!');
      this._onForward()
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {'\n'}
          Act for Justice
        </Text>
        <Button
          onPress={onButtonPress}
          title="Take Action!"
          accessibilityLabel="Tap to enter app"
        />
      </View>
    );
  }
}
