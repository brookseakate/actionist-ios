'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'steelblue',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 1,
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
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {'\n'}
          Act for Justice!
        </Text>
      </View>
    );
  }
}

class AlertListView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          'organizer': 'organizer 1',
          'title': 'title one',
          'description': 'description one is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 2',
          'title': 'title two',
          'description': 'description two is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 3',
          'title': 'title three',
          'description': 'description three is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 4',
          'title': 'title four',
          'description': 'description four is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 5',
          'title': 'title five',
          'description': 'description five is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 5',
          'title': 'title five',
          'description': 'description five is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
        {
          'organizer': 'organizer 5',
          'title': 'title five',
          'description': 'description five is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
        },
      ])
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.container}>
              <Text style={styles.steelBlue}>
                {rowData['organizer']}
              </Text>
              <Text style={styles.title}>
                {rowData['title']}
              </Text>
              <Text style={styles.steelBlue}>
                {rowData['description']}
              </Text>
            </View>
          }
          />

    {/*
        // <ListView
        //   contentContainerStyle={styles.container}
        //   dataSource={this.state.dataSource}
        //   renderRow={(rowData) =>
        //     <Text>
        //       {rowData['organizer']}
        //       {rowData['title']}
        //       {rowData['description']}
        //     </Text>
        //   }
        // />
        */}

      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('ActForJusticeApp', () => AlertListView);
