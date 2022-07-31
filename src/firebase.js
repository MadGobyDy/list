import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB61k27U7kbcfPAjhD6hEbLwHe3fxLjG8A",
  authDomain: "mytest-79e4f.firebaseapp.com",
  databaseURL: "https://mytest-79e4f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mytest-79e4f",
  storageBucket: "mytest-79e4f.appspot.com",
  messagingSenderId: "604603782755",
  appId: "1:604603782755:web:cc0ffd27b31cab1e8cca56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const fruitsRef = doc(db, "fruits", 'fruits');

const addNewFruit = async (fruit) => {
  await updateDoc(fruitsRef, {
    items: arrayUnion(fruit),
  });
}

const removeFruit = async (fruit) => {
  await updateDoc(fruitsRef, {
    items: arrayRemove(fruit),
  });
}

export {addNewFruit, removeFruit, db};