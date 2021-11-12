import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOGuWs4Jp8ucu3C38lvHQmrcJ7QzkmrZE",
  authDomain: "justclick-26544.firebaseapp.com",
  projectId: "justclick-26544",
  storageBucket: "justclick-26544.appspot.com",
  messagingSenderId: "40958624839",
  appId: "1:40958624839:web:4d670919d799302bb31d62",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export default firestore;
