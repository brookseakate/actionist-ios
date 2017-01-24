import React, { Component } from 'react';
import {  Alert } from 'react-native';

const Helpers = {
  displayKudos: (message) => {
    Alert.alert(
      'Thank You! Here\'s a message from the organizer:',
      message
    )
  }
}

export default Helpers;
