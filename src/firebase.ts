import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs-ZKya_0ClkXhWMTKvVJj7i_IbSke3Mg",
  authDomain: "inwebsale.firebaseapp.com",
  projectId: "inwebsale",
  storageBucket: "inwebsale.appspot.com",
  messagingSenderId: "366292907612",
  appId: "1:366292907612:web:8b283a6e2797ca0d251899",
  measurementId: "G-3LW4MS0XYP"
};

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);

export { app, db };