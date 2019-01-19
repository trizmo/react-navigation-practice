import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button}
          title="SETTINGS"
          onPress={() => this.props.navigation.navigate("Settings")}
        >
        </Button>

        <Button style={styles.button}
          title="CANVAS PLAY"
          onPress={() => this.props.navigation.navigate("Canvas")}
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginBottom: 5
  }
});