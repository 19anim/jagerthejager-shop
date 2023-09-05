import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYwLIOeBIihwlQsX3MgaID67Cv5FgpLtM",
  authDomain: "jagerthejagershop.firebaseapp.com",
  projectId: "jagerthejagershop",
  storageBucket: "jagerthejagershop.appspot.com",
  messagingSenderId: "911651848434",
  appId: "1:911651848434:web:3f5e50865f2d987af5106b",
  measurementId: "G-XBZ9TQHLJ1",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signOutUser = () => signOut(auth);

export const addCollectionAndDocuments = async (
  objectsToAdd,
  collectionKey
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const querySnapShotData = querySnapShot.docs;
  const categoriesMap = querySnapShotData.reduce((acc, category) => {
    const { title, items } = category.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};
