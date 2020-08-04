import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles/style';

const Detail = ({ navigation, route }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title={"View Bottom Tabs"}
        onPress={() => navigation.navigate("Bottom Tabs", {
          name: "Param1"
        })}
      />
      <Button
        title={"View Top Tabs"}
        onPress={() => navigation.navigate("Top Tabs")}
      />
      <Button
        title={"Pass Data Back"}
        onPress={() => navigation.navigate('Feed', {
          data: "Hello!"
        })}
      />
    </View>
  );
}

export default Detail;
