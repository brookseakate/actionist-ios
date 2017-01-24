import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

import styles from '../../styles'
import { phonecall } from 'react-native-communications';
import Helpers from '../../lib/Helpers';

export default class CallActionView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;
    if (this.props.actionData['target_phone_number'] !== undefined && this.props.actionData['target_phone_number'] !== null) {
      this.phoneNumber = '1' + this.props.actionData['target_phone_number']
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

        <Button
          color='skyblue'
          title={'Call: ' + Helpers.phoneDisplay(this.phoneNumber)}
          onPress={() => phonecall(this.phoneNumber, false)}
        />

        <Text style={styles.steelBlue}>
          <Text style={styles.fieldLabel}>
            Name:
          </Text>
           { Helpers.normalizeNull('name', this.actionData['target_name'], ' ') }
        </Text>

        { Helpers.renderUnlessNull('Elected Official Level', this.actionData['target_official_type']) }

        <Text style={styles.steelBlue}>
          <Text style={styles.fieldLabel}>
            Script:
          </Text>
           { Helpers.normalizeNull('script', this.actionData['script'], '\n') }
        </Text>
        
        <Text style={styles.steelBlue}>
          <Text style={styles.fieldLabel}>
            Details:
          </Text>
          { Helpers.normalizeNull('description', this.actionData['description'], '\n') }
        </Text>

      </ScrollView>
    );
  }
}
