import AsyncStorage from '@react-native-async-storage/async-storage';

// Keys
const KEYS = {
  USER_PIN: 'USER_PIN',
  TIMER_MINS: 'TIMER_MINS',
  ALLOWED_APPS: 'ALLOWED_APPS',
  SCHEDULE: 'SCHEDULE', // { enabled: boolean, start: string, end: string, days: number[] }
  APPEARANCE: 'APPEARANCE', // { accentColor: string, emoji: string, message: string }
  SILENT_MODE: 'SILENT_MODE',
  NOTIFICATIONS: 'NOTIFICATIONS',
  FINISH_SOUND: 'FINISH_SOUND'
};

export const getStorageData = async () => {
  try {
    const multiGetKeys = [
      KEYS.USER_PIN,
      KEYS.TIMER_MINS,
      KEYS.ALLOWED_APPS,
      KEYS.SCHEDULE,
      KEYS.APPEARANCE,
      KEYS.SILENT_MODE,
      KEYS.NOTIFICATIONS,
      KEYS.FINISH_SOUND
    ];
    const results = await AsyncStorage.multiGet(multiGetKeys);
    const data = {};
    results.forEach(([key, value]) => {
      if (value !== null) {
        try {
          data[key] = JSON.parse(value);
        } catch {
          data[key] = value;
        }
      }
    });
    
    // Defaults
    if (!data[KEYS.TIMER_MINS]) data[KEYS.TIMER_MINS] = 60;
    if (!data[KEYS.ALLOWED_APPS]) data[KEYS.ALLOWED_APPS] = [];
    if (!data[KEYS.APPEARANCE]) data[KEYS.APPEARANCE] = { accentColor: '#EF4444', emoji: '🔒', message: 'Stay the course. You got this.' };
    
    return data;
  } catch (e) {
    console.error('Failed to load data', e);
    return {};
  }
};

export const saveValue = async (key, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(`Failed to save ${key}`, e);
  }
};

export const STORAGE_KEYS = KEYS;
