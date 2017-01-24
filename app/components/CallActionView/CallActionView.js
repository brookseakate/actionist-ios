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
      this.phoneNumber = '1' + this.props.actionData['target_phone_number'];
      this.displayTarget = Helpers.phoneDisplay(this.phoneNumber);
      this.callbackController = 'static';
    } else if (this.props.actionData['target_official_type'] !== undefined && this.props.actionData['target_official_type'] !== null) {
      this.officialType = this.props.actionData['target_official_type'];
      this.displayTarget = this.officialType;
      this.callbackController = 'official';
    } else {
      this.displayTarget = 'as described below.';
      this.callbackController = 'error';
    }
  };

  _buttonCallback = () => {
    if (this.callbackController === "static") {
      phonecall(this.phoneNumber, false) // NOTE: replace this with calling sequence
    } else if (this.callbackController === "official") {
      this._callOfficialSequence();
    } else {
      Alert.alert(
        'Error',
        'Could not complete call action. Please complete action as described in Details.'
      )
    }
  };

  _callOfficialSequence = () => {
    // @TODO - implement
    Alert.alert(
      "Implement Call Official Sequence!" // NOTE: log
    )
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
          title={'Call: ' + this.displayTarget}
          onPress={() => this._buttonCallback()}
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
