// app/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDr2-SqJJvR6TE4XEUevgfKMa-UMlABHWc",
    authDomain: "time-tracker-493a3.firebaseapp.com",
    projectId: "time-tracker-493a3",
    storageBucket: "time-tracker-493a3.appspot.com",
    messagingSenderId: "1056218888956",
    appId: "1:1056218888956:web:a3aa3b12e215b6ff12f579",
    measurementId: "G-MBNJB2GTCG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };