import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7zmyI1Y2g7t5fzuxTQyA_tHrjDbPIvDQ",
  authDomain: "shop-ztm-db.firebaseapp.com",
  projectId: "shop-ztm-db",
  storageBucket: "shop-ztm-db.appspot.com",
  messagingSenderId: "545912134622",
  appId: "1:545912134622:web:2274de6a718825725e1b4f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", //google auth configuration to select an account on signin
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type DocumentsObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends DocumentsObjectToAdd>(
  collectionKey: string,
  documentsObjectToAdd: T[]
  // field
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  documentsObjectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<{
  [key: string]: any[];
}> => {
  const collectionRef = collection(db, "categories");
  const qry = query(collectionRef);

  const querySnapshot = await getDocs(qry);
  const categoryMap = querySnapshot.docs.reduce(
    (acc: { [key: string]: any[] }, docSnapshot) => {
      const { title, items } = docSnapshot.data(); //Get title and items from every snapshot
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {}
  );
  return categoryMap;
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: string;
  email: string;
  displayName?: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | DocumentReference<DocumentData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userDocRef;
};

export const newUserWithUserAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithMailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
