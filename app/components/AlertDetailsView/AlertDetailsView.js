import React, { Component } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';

import styles from '../../styles'

export default class AlertDetailsView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.container}
        >
        <Text style={styles.steelBlue}>
          {this.actionData['organizer']}
        </Text>
        <Text style={styles.title}>
          {this.actionData['title']}
        </Text>
        <Text style={styles.steelBlue}>
          {this.actionData['description']}
        </Text>
      </ScrollView>
    );
  }
}
