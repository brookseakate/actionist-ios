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

  _authorizeCalendars = () => {
    RNCalendarEvents.authorizeEventStore()
    .then(status => {
      // handle status
      Alert.alert(
        "Authorization status! " + status
      )
    })
    .catch(error => {
     // handle error
    });
  }

  _findCalendars = () => {
    this._authorizeCalendars();

    RNCalendarEvents.findCalendars()
    .then(calendars => {
      // handle calendars
      Alert.alert(
        "Calendars: " + calendars
      ) // NOTE: debug
      return calendars
    })
    .catch(error => {
      // handle error
      Alert.alert(
        "Nah, that's a calendar-finding error...: " + error
      ) // NOTE: debug
    });
  };

  _addCalendarEvent = (data) => {
    // userCalendars = this._findCalendars();
    console.log("In _addCalendarEvent");
    // this._authorizeCalendars();
    console.log("Type of RNCalEvents? " + String(typeof RNCalendarEvents));
    // RNCalendarEvents.saveEvent('demo TEST title!', {
    //   location: 'location',
    //   notes: 'notes',
    //   startDate: '2017-01-21T02:26:00.000Z',
    //   endDate: '2017-01-21T03:26:00.000Z'
    // })

    // normalize date formatting
    let start = new Date(data['event_start_datetime']);
    start = start.toISOString();
    let end = new Date(data['event_end_datetime']);
    end = end.toISOString();

    RNCalendarEvents.saveEvent(data['title'], {
      location: data['location'],
      notes: data['description'],
      startDate: start,
      endDate: end
    })
    .then(id => {
      // handle success
      Alert.alert(
        "Event " + data['title'] + " successfully added to calendar." +
        " Id: " + id // @TODO - remove/debug
      )
    })
    .catch(error => {
      // handle failure
      Alert.alert(
        "Nah, that's an error...: " + error
      ) // NOTE: debug
    });
  };

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
        <TouchableHighlight onPress={() => this._addCalendarEvent(this.actionData)}>
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
