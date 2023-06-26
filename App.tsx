import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./navigation";
import {useColorScheme} from "react-native";

export default function App() {
  const colorScheme = useColorScheme()
  return (
    <View style={styles.container}>
      <Navigation colorScheme={colorScheme} />
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
