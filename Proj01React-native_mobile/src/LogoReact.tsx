import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, Image, StyleSheet } from 'react-native';

const LogoReact = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles1.container}>
        <Image
          style={styles1.stretch}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  const styles1 = StyleSheet.create({
    container: {
      flex: 1,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
});  
  
export {LogoReact};
