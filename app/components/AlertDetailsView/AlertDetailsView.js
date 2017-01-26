import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import styles from '../../styles'
import { phonecall, email } from 'react-native-communications';
import RNCalendarEvents from 'react-native-calendar-events';
import DateHelpers from '../../lib/DateHelpers';
import Helpers from '../../lib/Helpers';

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
  };

  _addEventOrReqAuth = (eventData) => {
    RNCalendarEvents.authorizationStatus()
    .then(status => {
      if (status == 'authorized') {
        this._addCalendarEvent(eventData);
      } else if (status == 'denied' || status == 'restricted') {
        Alert.alert(
          "Calendar access is restricted for this app. Please reset access in iOS Settings to add events to calendar."
        );
      } else if (status == 'undetermined') {
        return this._requestCalendarAuth(eventData);
      }
    })
    .catch(error => {
      Alert.alert(
         "An error occurred in _addEventOrReqAuth(): " + error
      );
    });
  }

  _requestCalendarAuth = (eventData) => {
    RNCalendarEvents.authorizeEventStore()
    .then(status => {
      if (status == 'authorized') {
        this._addCalendarEvent(eventData);
      } else if (status == 'denied' || status == 'restricted' || status == 'undetermined') {
        Alert.alert(
          "Calendar access is restricted for this app. Please reset access in iOS Settings to allow access."
          // + " Status is currently: " + status // NOTE: log
        );
      }
    })
    .catch(error => {
      // handle error
      Alert.alert(
         "An error occurred in _requestCalendarAuth(): " + error
      );
    });
  }

  _addCalendarEvent = (data) => {
    // normalize date formatting
    let start = DateHelpers.isoDateString(data['event_start_datetime'])
    let end = DateHelpers.isoDateString(data['event_end_datetime'])

    // save event
    RNCalendarEvents.saveEvent(data['title'], {
      location: (data['location'] !== null ) ? data['location'] : '', /* use empty string if null */
      notes: (data['description'] !== null ) ? data['description'] : '', /* use empty string if null */
      startDate: start,
      endDate: end
    })
    .then(id => {
      // handle success
      Alert.alert(
        "Event Added ",
        data['title'] + "\non " + DateHelpers.dateTimeDisplay(data['event_start_datetime']),
        [
          {text: 'OK', onPress: () => Helpers.displayKudos(data['kudos_text']) },
        ]
      )
    })
    .catch(error => {
      // handle failure
      Alert.alert(
        "An error occurred when adding the event to calendar: " + error
      )
    });
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1}}
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

        <TouchableHighlight onPress={() => email([this.email_address], null, null, this.actionData['email_subject'], this.actionData['email_body'])}>
          <Text style={styles.steelBlue}>
            {this.email_address}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this._addEventOrReqAuth(this.actionData)}>
          <Text style={styles.steelBlue}>
            Add to Calendar: {"\n"}
            Event at {this.actionData['event_start_datetime']}
          </Text>
        </TouchableHighlight>

        <Text style={styles.steelBlue}>
          {this.actionData['description']}
        </Text>
        
      </ScrollView>
    );
  }
}
