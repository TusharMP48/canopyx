// firebase.js - Simple version
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsmkTZxf4Ft_GUdGpL173tJR7gxziEuC0",
  authDomain: "canopylogin-d3b04.firebaseapp.com",
  projectId: "canopylogin-d3b04",
  storageBucket: "canopylogin-d3b04.firebasestorage.app",
  messagingSenderId: "1091204530573",
  appId: "1:1091204530573:web:f09de047b55049653fbdc4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;