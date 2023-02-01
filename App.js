import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{Router} from './app/router';


export default function App() {

  console.log("App Excecuted");

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
