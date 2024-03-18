import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'newsapp-4ee6a.firebaseapp.com',
  databaseURL: 'https://newsapp-4ee6a-default-rtdb.firebaseio.com',
  projectId: 'newsapp-4ee6a',
  storageBucket: 'newsapp-4ee6a.appspot.com',
  messagingSenderId: '906726492116',
  appId: '1:906726492116:web:e1714f94311b2245aa3841',
  measurementId: 'G-MQ5JKF9WC2',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
