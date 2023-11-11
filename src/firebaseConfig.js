import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeylHn7ewSTfuk8Ry55efwy5xqdfFwtCA",
  authDomain: "kobb-d48a9.firebaseapp.com",
  projectId: "kobb-d48a9",
  storageBucket: "kobb-d48a9.appspot.com",
  messagingSenderId: "762826084142",
  appId: "1:762826084142:web:0eed12b7f562662fb8b4bf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
