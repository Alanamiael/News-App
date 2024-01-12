import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBc0srbKWLIX_LmhR0jndXJx7K9llXCYbs',
  authDomain: 'fir-course-46797.firebaseapp.com',
  projectId: 'fir-course-46797',
  storageBucket: 'fir-course-46797.appspot.com',
  messagingSenderId: '719096625064',
  appId: '1:719096625064:web:208ac2b2e8b1d2714a4f9d',
  measurementId: 'G-D79DH5LJ6Q',
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
