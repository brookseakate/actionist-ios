import React, { Component } from 'react';
import {
  Alert,
  Text
} from 'react-native';

import styles from '../styles'

const Helpers = {
  displayKudos: (message) => {
    Alert.alert(
      'Thank You! Here\'s a message from the organizer:',
      message
    )
  },

  phoneDisplay: (number) => {
    return number.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 ($2) $3-$4")
  },

  normalizeNull: (fieldName, fieldValue, appender) => {
    if (fieldValue !== null ) {
      return appender + fieldValue
    } else {
      return appender + 'No ' + fieldName + ' provided'
    }
  },

  renderUnlessNull: (fieldTitle, fieldData) => {
    if (fieldData !== null) {
      return (
        <Text style={styles.steelBlue}>
          <Text style={styles.fieldLabel}>
            { fieldTitle + ': '}
          </Text>
          { fieldData }
        </Text>
      )
    } else {
      return
    }
  }
}

export default Helpers;
