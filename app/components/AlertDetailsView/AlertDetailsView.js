import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import styles from '../../styles'
import { phonecall, email } from 'react-native-communications';

export default class AlertDetailsView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;
    if (this.props.actionData['target_phone_number'] !== undefined && this.props.actionData['target_phone_number'] !== null) {
      this.phone_number = '1' + this.props.actionData['target_phone_number']
    }
    if (this.props.actionData['target_email'] !== undefined && this.props.actionData['target_email'] !== null) {
      this.email_address = this.props.actionData['target_email']
    }
  }

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.container}
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
        <TouchableHighlight onPress={() => email([this.email_address], null, null, this.actionData['email_subject'], this.actionData['email_body'])}>
          <Text style={styles.steelBlue}>
            {this.email_address}
          </Text>
        </TouchableHighlight>
        <Text style={styles.steelBlue}>
          {this.actionData['description']}
        </Text>
      </ScrollView>
    );
  }
}
