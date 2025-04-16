import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: "https://media.tenor.com/_sRq7f0tQLEAAAAM/reactjs.gif"}}
      />
      <Text style={styles.customText}>Aplicação iniciada com sucesso!!!</Text>
      <StatusBar style="auto" />
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

  customText: {
    fontSize: 22,
    color: '#FFD700', // Dourado
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
  },

  img: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#FFD700', // Dourado
  }
});
