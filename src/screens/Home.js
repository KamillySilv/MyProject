import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';

export default function Home() {

  return (
    <View style={styles.container}>
      <View>
        <Text>Home</Text>
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
