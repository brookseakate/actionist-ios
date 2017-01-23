import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import styles from '../../styles'
import RNCalendarEvents from 'react-native-calendar-events';

export default class AlertDetailsView extends Component {
  constructor(props) {
    super(props);
    this.actionData = this.props.actionData;
  };

  _addEventOrReqAuth = (eventData) => {
    // console.log("In _addEventOrReqAuth"); // NOTE: log
    RNCalendarEvents.authorizationStatus()
    .then(status => {
      // console.log("In _addEventOrReqAuth status: " + status); // NOTE: log
      if (status == 'authorized') {
        // console.log("Got into that if statement...: " + status); // NOTE: log
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
    // console.log("In _requestCalendarAuth"); // NOTE: log

    RNCalendarEvents.authorizeEventStore()
    .then(status => {
      // handle status
      // Alert.alert(
      //   "Authorization status! " + status // @TODO - remove/debug
      //   // "Thank you"
      // );
      if (status == 'authorized') {
        // console.log("In _calAuthStatus: status == 'authorized'"); // NOTE: log
        this._addCalendarEvent(eventData);
      } else if (status == 'denied' || status == 'restricted' || status == 'undetermined') {
        Alert.alert(
          "Calendar access is restricted for this app. Please reset access in iOS Settings to allow access."
          + status // @TODO - remove/debug
        );
      }
      // // @TODO - remove...most likely to cause infinite loop?
      // else if (status == 'undetermined') {
      //   this._requestCalendarAuth()
      // }
    })
    .catch(error => {
      // handle error
      Alert.alert(
         "An error occurred in _requestCalendarAuth(): " + error
      );
    });
  }

  _addCalendarEvent = (data) => {
    console.log("In _addCalendarEvent"); // NOTE: log

    // normalize date formatting
    let start = new Date(data['event_start_datetime']);
    start = start.toISOString();

    let end = new Date(data['event_end_datetime']);
    end = end.toISOString();

    console.log("saving event"); // NOTE: log
    // save event
    RNCalendarEvents.saveEvent(data['title'], {
      location: data['location'],
      notes: data['description'],
      startDate: start,
      endDate: end
    })
    .then(id => {
      // handle success
      Alert.alert(
        "Event added to your calendar: " + data['title']
        // " Id: " + id // @TODO - remove/debug
      )
    })
    .catch(error => {
      // handle failure
      Alert.alert(
        "Nah, that's an error in _addCalendarEvent...: " + error
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
