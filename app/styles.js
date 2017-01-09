'use strict';

import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'steelblue',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderTopWidth: 4,
  },
  powderBlue: {
    padding: 5,
    color: 'white',
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    padding: 5,
    color: 'white',
    backgroundColor: 'skyblue',
  },
  steelBlue: {
    padding: 5,
    color: 'white',
    backgroundColor: 'steelblue',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'steelblue',
    fontSize: 26,
  },
  button: {
    backgroundColor: 'white',
    fontSize: 20,
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // alignItems: 'stretch',
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around'
  },
});

export default styles
