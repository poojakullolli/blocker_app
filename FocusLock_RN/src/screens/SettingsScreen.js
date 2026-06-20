import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert, Switch } from 'react-native';
import { getStorageData, saveValue, STORAGE_KEYS } from '../utils/storage';

export default function SettingsScreen({ navigation }) {
  const [pin, setPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [currentPin, setCurrentPin] = useState('');
  
  const [timerMins, setTimerMins] = useState('');
  
  const [appName, setAppName] = useState('');
  const [allowedApps, setAllowedApps] = useState([]);
  
  const [silentMode, setSilentMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [finishSound, setFinishSound] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const data = await getStorageData();
    setCurrentPin(data[STORAGE_KEYS.USER_PIN] || '');
    setTimerMins(String(data[STORAGE_KEYS.TIMER_MINS] || ''));
    setAllowedApps(data[STORAGE_KEYS.ALLOWED_APPS] || []);
    setSilentMode(data[STORAGE_KEYS.SILENT_MODE] || false);
    setNotifications(data[STORAGE_KEYS.NOTIFICATIONS] ?? true);
    setFinishSound(data[STORAGE_KEYS.FINISH_SOUND] ?? true);
  };

  const handleSavePIN = async () => {
    if (currentPin && pin !== currentPin) {
      Alert.alert('Error', 'Current PIN is incorrect.');
      return;
    }
    if (!newPin || newPin.length < 4) {
      Alert.alert('Error', 'New PIN must be at least 4 digits.');
      return;
    }
    await saveValue(STORAGE_KEYS.USER_PIN, newPin);
    setCurrentPin(newPin);
    setPin('');
    setNewPin('');
    Alert.alert('Success', 'PIN saved successfully!');
  };

  const handleSaveTimer = async () => {
    const mins = parseInt(timerMins);
    if (isNaN(mins) || mins <= 0) {
      Alert.alert('Error', 'Please enter a valid number of minutes.');
      return;
    }
    await saveValue(STORAGE_KEYS.TIMER_MINS, mins);
    Alert.alert('Success', 'Timer saved!');
  };

  const handleAddApp = async () => {
    if (!appName.trim()) return;
    const newList = [...allowedApps, appName.trim()];
    setAllowedApps(newList);
    await saveValue(STORAGE_KEYS.ALLOWED_APPS, newList);
    setAppName('');
  };

  const handleRemoveApp = async (index) => {
    const newList = allowedApps.filter((_, i) => i !== index);
    setAllowedApps(newList);
    await saveValue(STORAGE_KEYS.ALLOWED_APPS, newList);
  };

  const handleSaveAll = async () => {
    await saveValue(STORAGE_KEYS.SILENT_MODE, silentMode);
    await saveValue(STORAGE_KEYS.NOTIFICATIONS, notifications);
    await saveValue(STORAGE_KEYS.FINISH_SOUND, finishSound);
    Alert.alert('Success', 'All preferences saved!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* PIN Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔒 PIN Settings</Text>
        {currentPin ? (
          <TextInput 
            style={styles.input} 
            placeholder="Current PIN" 
            placeholderTextColor="#64748B"
            keyboardType="numeric"
            secureTextEntry
            value={pin}
            onChangeText={setPin}
          />
        ) : (
          <Text style={styles.warningText}>No PIN set yet. Please create a new PIN first.</Text>
        )}
        <TextInput 
          style={styles.input} 
          placeholder="New PIN" 
          placeholderTextColor="#64748B"
          keyboardType="numeric"
          secureTextEntry
          value={newPin}
          onChangeText={setNewPin}
        />
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleSavePIN}>
          <Text style={styles.buttonText}>Save PIN</Text>
        </TouchableOpacity>
      </View>

      {/* Timer Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏱ Timer Settings</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Minutes (e.g. 60)" 
          placeholderTextColor="#64748B"
          keyboardType="numeric"
          value={timerMins}
          onChangeText={setTimerMins}
        />
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleSaveTimer}>
          <Text style={styles.buttonText}>Set Timer</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ Preferences</Text>
        <View style={styles.row}>
          <Text style={styles.rowText}>Silent Mode during Focus</Text>
          <Switch value={silentMode} onValueChange={setSilentMode} />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Focus Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Play sound when finished</Text>
          <Switch value={finishSound} onValueChange={setFinishSound} />
        </View>
      </View>

      {/* Allowed Apps */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📱 Allowed Apps</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter app name" 
          placeholderTextColor="#64748B"
          value={appName}
          onChangeText={setAppName}
        />
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleAddApp}>
          <Text style={styles.buttonText}>+ Add App</Text>
        </TouchableOpacity>
        
        {allowedApps.map((app, index) => (
          <View key={index} style={styles.appRow}>
            <Text style={styles.appText}>{app}</Text>
            <TouchableOpacity onPress={() => handleRemoveApp(index)}>
              <Text style={styles.removeText}>❌</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Save All */}
      <TouchableOpacity style={styles.buttonSuccess} onPress={handleSaveAll}>
        <Text style={styles.buttonText}>💾 Save All Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 20, paddingBottom: 50 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#38BDF8', marginBottom: 15 },
  input: { backgroundColor: '#1E293B', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 10, fontSize: 16 },
  buttonPrimary: { backgroundColor: '#3B82F6', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonSuccess: { backgroundColor: '#10B981', padding: 18, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  warningText: { color: '#F59E0B', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1E293B', padding: 15, borderRadius: 8, marginBottom: 10 },
  rowText: { color: '#F8FAFC', fontSize: 16 },
  appRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1E293B', padding: 15, borderRadius: 8, marginTop: 10 },
  appText: { color: '#FFF', fontSize: 16 },
  removeText: { fontSize: 16 }
});
