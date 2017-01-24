import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import styles from '../../styles'
import { phonecall } from 'react-native-communications';

export default class CallActionView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;
    if (this.props.actionData['target_phone_number'] !== undefined && this.props.actionData['target_phone_number'] !== null) {
      this.phone_number = '1' + this.props.actionData['target_phone_number']
    }
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.detailsContainer}
        >
        <Text style={styles.steelBlue}>
          {this.actionData['headline']}
        </Text>
        <Text style={styles.title}>
          {this.actionData['title']}
        </Text>
        <TouchableHighlight onPress={() => phonecall(this.phone_number, false)}>
          <Text style={styles.steelBlue}>
            {this.phone_number}
          </Text>
        </TouchableHighlight>
        <Text style={styles.steelBlue}>
          {this.actionData['description']}
        </Text>
      </ScrollView>
    );
  }
}
