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
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    textAlign: 'left',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'steelblue',
    fontSize: 26,
    textAlign: 'left',
  },
  actionTag: {
    padding: 5,
    paddingRight: 10,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'steelblue',
    fontSize: 16,
    textAlign: 'right',
  },
  actionDetailTag: {
    padding: 5,
    paddingRight: 10,
    fontWeight: '600',
    color: 'white',
    backgroundColor: 'steelblue',
    fontSize: 16,
    textAlign: 'center',
  },
  fieldLabel: {
    fontWeight: '600',
  },
  buttonContainer: {
    // flex: 1,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    // textAlign: 'center',
  },
  button: {
    // backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default styles
