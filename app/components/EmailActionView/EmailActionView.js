import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';

import styles from '../../styles'
import { email } from 'react-native-communications';
import Helpers from '../../lib/Helpers';

export default class AlertDetailsView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;

    if (this.props.actionData['target_email'] !== undefined && this.props.actionData['target_email'] !== null) {
      this.emailAddress = this.props.actionData['target_email'];
      this.displayTarget = this.emailAddress;
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
      email([this.emailAddress], null, null, this.actionData['email_subject'], this.actionData['email_body']) // NOTE: replace this with emailing sequence
    } else if (this.callbackController === "official") {
      this._emailOfficialSequence();
    } else {
      Alert.alert(
        'Error',
        'Could not complete call action. Please complete action as described in Details.'
      )
    }
  };

  _emailOfficialSequence = () => {
    // @TODO - implement
    Alert.alert(
      "Implement Email Official Sequence!" // NOTE: log
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
          title={'Email: ' + this.displayTarget}
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
            Email Subject:
           { Helpers.normalizeNull('subject', this.actionData['email_subject'], ' ') }
         </Text>
        </Text>

        <Text style={styles.steelBlue}>
          <Text style={styles.fieldLabel}>
            Email Body:
          </Text>
           { Helpers.normalizeNull('email body', this.actionData['email_body'], '\n') }
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
