import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdnyrYEWtX1vn97DaoxUuhwjz02lkE7ZY",
  authDomain: "new--olx.firebaseapp.com",
  projectId: "new--olx",
  storageBucket: "new--olx.appspot.com",
  messagingSenderId: "373941922461",
  appId: "1:373941922461:web:be940b74e2d7e886d88274",
  measurementId: "G-SRZ0R5SL99"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
