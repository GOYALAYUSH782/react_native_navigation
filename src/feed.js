import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles/style';

class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer</Text>
        <Button
          title={"Go to feed item"}
          onPress={() => { }}
        />
      </View >
    )
  }
}

export default Feed;