import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import  { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBy2hYi_ukYMqH7g5V_xuStrJ5jQx6abA0",
  authDomain: "udemy-clone-b868a.firebaseapp.com",
  projectId: "udemy-clone-b868a",
  storageBucket: "udemy-clone-b868a.appspot.com",
  messagingSenderId: "425398605167",
  appId: "1:425398605167:web:74fa7a7085d055674b849a",
  measurementId: "G-FXSNFDGRP3"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export default app;