import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFHyO4Ke5litqCjLq8Uw3TXrw3UOUGCHU",
  authDomain: "eccommercereact.firebaseapp.com",
  projectId: "eccommercereact",
  storageBucket: "eccommercereact.appspot.com",
  messagingSenderId: "706809020102",
  appId: "1:706809020102:web:0f2da3beee281320f5a1c7",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
