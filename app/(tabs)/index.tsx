import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const novoNumero = Math.floor(Math.random() * 10);
    setNumero(novoNumero);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sortear um número</Text>
      <View style={styles.buttonContainer}>
        <Button title="SORTEAR" onPress={sortearNumero} color="#ffffff" />
      </View>
      {numero !== null && (
        <Text style={styles.result}>Número sorteado: {numero}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    color: '#000',
  },
  buttonContainer: {
    width: '40%',
    marginBottom: 20,
    backgroundColor: '#2196f3',
  },
  result: {
    fontSize: 18,
    marginTop: 16,
    color: '#000',
  },
});
