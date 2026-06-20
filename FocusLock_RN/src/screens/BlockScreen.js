import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStorageData, STORAGE_KEYS } from '../utils/storage';
import { Audio } from 'expo-av';

export default function BlockScreen({ route, navigation }) {
  const { durationMinutes } = route.params;
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [showModal, setShowModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [correctPin, setCorrectPin] = useState('');
  const [appearance, setAppearance] = useState({});

  useEffect(() => {
    const loadSettings = async () => {
      const data = await getStorageData();
      setCorrectPin(data[STORAGE_KEYS.USER_PIN] || '');
      setAppearance(data[STORAGE_KEYS.APPEARANCE]);
    };
    loadSettings();

    // Prevent hardware back button
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleFinish = async () => {
    const data = await getStorageData();
    if (data[STORAGE_KEYS.FINISH_SOUND]) {
      // In a real app, load a sound file. Using an alert for demo if no asset.
      try {
        // const { sound } = await Audio.Sound.createAsync(require('../../assets/chime.mp3'));
        // await sound.playAsync();
      } catch (e) {
        console.log('No sound asset found');
      }
    }
    Alert.alert('Focus Session Complete!', 'Great job staying productive.');
    navigation.goBack();
  };

  const handleUnlock = () => {
    if (pinInput === correctPin) {
      setShowModal(false);
      navigation.goBack();
    } else {
      Alert.alert('Error', '❌ Wrong PIN!');
      setPinInput('');
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{appearance?.emoji || '🔒'}</Text>
        <Text style={styles.title}>App Blocked</Text>
        <Text style={styles.subtitle}>This app is blocked. Stay focused! 💪</Text>
        
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
        <Text style={styles.timeRemainingLabel}>Time Remaining</Text>
        
        <Text style={styles.motivational}>{appearance?.message || 'Stay the course. You got this.'}</Text>
      </View>

      <TouchableOpacity style={styles.hiddenUnlock} onPress={() => setShowModal(true)} />

      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter PIN to unlock</Text>
            <TextInput 
              style={styles.input}
              placeholder="PIN"
              placeholderTextColor="#64748B"
              keyboardType="numeric"
              secureTextEntry
              value={pinInput}
              onChangeText={setPinInput}
              autoFocus
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.btnCancel} onPress={() => setShowModal(false)}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnUnlock} onPress={handleUnlock}>
                <Text style={styles.btnText}>Unlock</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emoji: { fontSize: 64, marginBottom: 10 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#38BDF8', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#94A3B8', marginBottom: 40 },
  timer: { fontSize: 72, fontWeight: 'bold', color: '#38BDF8', marginBottom: 5 },
  timeRemainingLabel: { fontSize: 16, color: '#94A3B8', marginBottom: 40 },
  motivational: { fontSize: 18, color: '#CBD5E1', fontStyle: 'italic', textAlign: 'center' },
  hiddenUnlock: { position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, backgroundColor: 'rgba(239, 68, 68, 0.2)', borderRadius: 20 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)' },
  modalContent: { width: '80%', backgroundColor: '#1E293B', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 18, color: '#FFF', marginBottom: 15, fontWeight: 'bold' },
  input: { width: '100%', backgroundColor: '#0F172A', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 20, fontSize: 16, textAlign: 'center' },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  btnCancel: { flex: 1, backgroundColor: '#64748B', padding: 15, borderRadius: 8, alignItems: 'center', marginRight: 10 },
  btnUnlock: { flex: 1, backgroundColor: '#3B82F6', padding: 15, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});
