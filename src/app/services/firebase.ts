import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3UMjRFhjFyPiOMIsQt5ubW2HB7heU4A8",
  authDomain: "chia-se-nhat-ki.firebaseapp.com",
  projectId: "chia-se-nhat-ki",
  storageBucket: "chia-se-nhat-ki.appspot.com",
  messagingSenderId: "679092355727",
  appId: "1:679092355727:web:33a88e40fc17213447e6fa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert("Sai email hoac password");
  }
};

const registerWithEmailAndPassword = async (data: any) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = res.user;
    await addDoc(collection(db, "Users"), {
      uuid: user.uid,
      birthday: data.birthday,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      email: data.email,
    });
  } catch (err: any) {
    console.error(err);
    alert("Co loi xay ra hoac email da duoc dang ki");
  }
};

const logout = () => {
  signOut(auth);
};

async function getCollection(db, collectionName) {
  const dataCollection = collection(db, collectionName);
  const dataCollectionSnapshot = await getDocs(dataCollection);
  const data = dataCollectionSnapshot.docs.map((doc) => doc.data());
  return data;
}

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  getCollection,
};
