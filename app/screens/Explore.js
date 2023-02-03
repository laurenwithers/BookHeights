import { StyleSheet, Text, View, Button } from 'react-native';

export default function Explore() {
  
  let greeting = "Hello Explore";
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});