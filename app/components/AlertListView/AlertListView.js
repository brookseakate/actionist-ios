import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ListView,
  Alert,
  TouchableHighlight,
  Button
} from 'react-native';

import styles from '../../styles'
import AlertDetailsView from '../AlertDetailsView/AlertDetailsView'
import CallActionView from '../CallActionView/CallActionView'
import EmailActionView from '../EmailActionView/EmailActionView'
import EventActionView from '../EventActionView/EventActionView'

export default class AlertListView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.action_list)
    };
  };

  typeSelector = (actData) => {
    var actType;
    if (actData.type === "call_action") {
      actType = "CALL";
    } else if (actData.type === "email_action") {
      actType = "EMAIL";
    } else if (actData.type === "event_action") {
      actType = "EVENT";
    } else {
      actType = "ACTION";
    }
    return actType;
  };

  _onListItemPress = (actData) => {
    // Alert.alert('ListItem has been pressed!');
    var nextComponent;

    if (actData.type === "call_action") {
      nextComponent = CallActionView;
    } else if (actData.type === "email_action") {
      nextComponent = EmailActionView;
    } else if (actData.type === "event_action") {
      nextComponent = EventActionView;
    } else {
      nextComponent = AlertDetailsView;
    }

    this.props.navigator.push({
      title: 'Details',
      component: nextComponent,
      passProps: {actionData: actData}
    });
  };

  _renderRow = (rowData) => {
    var actType = this.typeSelector(rowData);

    return (<TouchableHighlight
      onPress={() => this._onListItemPress(rowData)}
      >
      <View style={styles.container}>
        <Text style={styles.title}>
          {rowData['title']}
        </Text>
        <Text style={styles.steelBlue}>
          {rowData['headline']}
        </Text>
        <Text style={styles.actionTag}>
          {actType /* NOTE: log */}
          {/* rowData['uri'] */} {/* NOTE: log */}
        </Text>
      </View>
    </TouchableHighlight>);
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </ScrollView>
    );
  }
}
