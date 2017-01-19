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
    this.actionData = this.props.actionData
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
        <TouchableHighlight onPress={() => phonecall(this.actionData['target_phone_number'], false)}>
          <Text style={styles.steelBlue}>
            {this.actionData['target_phone_number']}
          </Text>
        </TouchableHighlight>
        <Text style={styles.steelBlue}>
          {this.actionData['description']}
        </Text>
      </ScrollView>
    );
  }
}
