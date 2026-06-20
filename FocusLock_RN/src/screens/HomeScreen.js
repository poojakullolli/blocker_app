import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getStorageData, STORAGE_KEYS } from '../utils/storage';

export default function HomeScreen({ navigation }) {
  const [timerMins, setTimerMins] = useState(0);
  const [isFocusOn, setIsFocusOn] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const data = await getStorageData();
        setTimerMins(Number(data[STORAGE_KEYS.TIMER_MINS]) || 0);
      };
      loadData();
    }, [])
  );

  const handleStartFocus = () => {
    if (timerMins <= 0) {
      Alert.alert('Hold on!', 'Please set a timer first in Settings.');
      return;
    }
    navigation.navigate('BlockScreen', { durationMinutes: timerMins });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logoIcon}>🔒</Text>
        <Text style={styles.logoText}>FocusLock</Text>
        <Text style={styles.tagline}>Stay focused. Stay productive.</Text>

        <View style={styles.statusBox}>
          <Text style={styles.statusText}>Focus Mode: OFF</Text>
        </View>

        <TouchableOpacity 
          style={styles.settingsButton} 
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>⚙️ Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.startButton} 
          onPress={handleStartFocus}
        >
          <Text style={styles.startButtonText}>▶ Start Focus Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logoIcon: {
    fontSize: 64,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 40,
  },
  statusBox: {
    marginBottom: 40,
  },
  statusText: {
    fontSize: 18,
    color: '#CBD5E1',
  },
  settingsButton: {
    backgroundColor: '#1E293B',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: '#3B82F6',
    width: '100%',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '600',
  },
  startButtonText: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
