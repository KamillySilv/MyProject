import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import {Ionicons  } from '@expo/vector-icons';

export default function Books() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Livros</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
