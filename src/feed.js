import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles/style';

const Feed = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button
        title={"Go to feed item"}
        onPress={() => navigation.navigate('Detail', {
          screenName: "My Details Screen"
        })}
      />
    </View >
  );
}

export default Feed;