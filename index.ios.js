'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

import styles from './app/styles.js'

import AlertDetailsView from './app/components/AlertDetailsView/AlertDetailsView'
import WelcomeView from './app/components/WelcomeView/WelcomeView'

//
// const loremListData = [
//   {
//     'organizer': 'organizer 1',
//     'title': 'title one',
//     'description': 'description one is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 2',
//     'title': 'title two',
//     'description': 'description two is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 3',
//     'title': 'title three',
//     'description': 'description three is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 4',
//     'title': 'title four',
//     'description': 'description four is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 5',
//     'title': 'title five',
//     'description': 'description five is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 6',
//     'title': 'title six',
//     'description': 'description six is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
//   {
//     'organizer': 'organizer 7',
//     'title': 'title seven',
//     'description': 'description seven is rad and should probably use some kind of lorem generator to demonstrate that, but will not',
//   },
// ]

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     backgroundColor: 'steelblue',
//     borderStyle: 'solid',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderBottomWidth: 4,
//     borderTopWidth: 4,
//   },
//   powderBlue: {
//     padding: 5,
//     color: 'white',
//     backgroundColor: 'powderblue',
//   },
//   skyBlue: {
//     padding: 5,
//     color: 'white',
//     backgroundColor: 'skyblue',
//   },
//   steelBlue: {
//     padding: 5,
//     color: 'white',
//     backgroundColor: 'steelblue',
//   },
//   title: {
//     padding: 5,
//     fontWeight: 'bold',
//     color: 'white',
//     backgroundColor: 'steelblue',
//     fontSize: 26,
//   },
//   button: {
//     backgroundColor: 'white',
//     fontSize: 20,
//   },
//   welcome: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     // alignItems: 'stretch',
//     // flex: 1,
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // justifyContent: 'space-around'
//   },
// });

export default class ActForJusticeApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: WelcomeView,
        }}
      />
    );
  }
}
//
// class WelcomeView extends Component {
//   _onForward = () => {
//     this.props.navigator.push({
//       title: 'Actions',
//       component: AlertListView
//     });
//   }
//
//   render () {
//     const onButtonPress = () => {
//       // Alert.alert('Button has been pressed!');
//       this._onForward()
//     };
//
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to {'\n'}
//           Act for Justice
//         </Text>
//         <Button
//           onPress={onButtonPress}
//           title="Take Action!"
//           accessibilityLabel="Tap to enter app"
//         />
//       </View>
//     );
//   }
// }

// class AlertListView extends Component {
//   constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows(loremListData)
//     };
//   }
//
//   // _onListForward = (data) => {
//   //   this.props.navigator.push({
//   //     title: 'Details',
//   //     component: AlertDetails,
//   //     passProps: {actionData: data}
//   //   });
//   // }
//
//   onListItemPress = (actData) => {
//     // Alert.alert('Button has been pressed!');
//     // this._onListForward(actData)
//     this.props.navigator.push({
//       title: 'Details',
//       component: AlertDetailsView,
//       passProps: {actionData: actData}
//     });
//   };
//
//   render() {
//     // const onListItemPress = (actData) => {
//     //   // Alert.alert('Button has been pressed!');
//     //   // this._onListForward(actData)
//     //   this.props.navigator.push({
//     //     title: 'Details',
//     //     component: AlertDetailsView,
//     //     passProps: {actionData: actData}
//     //   });
//     // };
//
//     return (
//       <ScrollView style={{flex: 1}}>
//         <ListView
//           contentContainerStyle={styles.container}
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) =>
//             <TouchableHighlight
//               onPress={() => this.onListItemPress(rowData)}
//             >
//             <View
//               style={styles.container}
//               >
//               <Text style={styles.steelBlue}>
//                 {rowData['organizer']}
//               </Text>
//               <Text style={styles.title}>
//                 {rowData['title']}
//               </Text>
//               <Text style={styles.steelBlue}>
//                 {rowData['description']}
//               </Text>
//             </View>
//           </TouchableHighlight>
//           }
//         />
//       </ScrollView>
//     );
//   }
// }

AppRegistry.registerComponent('ActForJusticeApp', () => ActForJusticeApp);
