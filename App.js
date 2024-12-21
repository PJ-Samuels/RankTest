import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'

//Expo update commands
//
//npx eas login
//npx eas build:configure
//npx eas build --platform ios
///npx eas submit -p ios

export default function App() {
  const publishableKey = "pk_live_cHJpbWFyeS1sbGFtYS00NC5jbGVyay5hY2NvdW50cy5kZXYk"
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClerkLoaded>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ClerkLoaded>
    </ClerkProvider>
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
