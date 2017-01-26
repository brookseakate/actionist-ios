import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';

import styles from '../../styles'
import RNCalendarEvents from 'react-native-calendar-events';
import DateHelpers from '../../lib/DateHelpers';
import Helpers from '../../lib/Helpers';

export default class AlertDetailsView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;
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
      // handle error
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
          "Calendar access is restricted for this app.",
          "Please reset access in iOS Settings to allow access. "
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
            title={'Add Event to Calendar: ' + DateHelpers.dateDisplay(this.actionData['event_start_datetime'])}
            onPress={() => this._addEventOrReqAuth(this.actionData)}
          />

          <Text style={styles.steelBlue}>
            <Text style={styles.fieldLabel}>
              Date:
            </Text>
             {' ' + DateHelpers.dateDisplay(this.actionData['event_start_datetime'])}
          </Text>

          <Text style={styles.steelBlue}>
            <Text style={styles.fieldLabel}>
              Time:
            </Text>
             {' ' + DateHelpers.timeDisplay(this.actionData['event_start_datetime']) + ' - ' + DateHelpers.timeDisplay(this.actionData['event_end_datetime'])}
          </Text>

          <Text style={styles.steelBlue}>
            <Text style={styles.fieldLabel}>
              Location:
            </Text>
             {' ' + this.actionData['location'] + '\n'}
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
