'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

import styles from './app/styles.js'

import WelcomeView from './app/components/WelcomeView/WelcomeView'

export default class ActForJusticeApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: WelcomeView,
        }}
      />
    );
  }
}

AppRegistry.registerComponent('ActForJusticeApp', () => ActForJusticeApp);
