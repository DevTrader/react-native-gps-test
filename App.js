/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid
} from 'react-native';

// import Permissions from 'react-native-permissions';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Permissions.request('camera', {
//   rationale: {
//     title: 'Cool Photo App Camera Permission',
//     message:
//       'Cool Photo App needs access to your camera ' +
//       'so you can take awesome pictures.',
//   },
// }).then(response => {
//   this.setState({ cameraPermission: response })
// })

//requestCameraPermission();

type Props = {};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  updateLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentDidMount() {
    setInterval(()=>{ this.updateLocation()},1000)
  }
  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text >Latitude: {this.state.latitude}</Text>
      <Text >Longitude: {this.state.longitude}</Text>
      {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
    </View>
    );
  }
}
