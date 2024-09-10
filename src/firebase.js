import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0DGOb4D5urCOkv39THN9dzOcz_2ir_wI",
  authDomain: "disneyplus-clone-e99c9.firebaseapp.com",
  projectId: "disneyplus-clone-e99c9",
  storageBucket: "disneyplus-clone-e99c9.appspot.com",
  messagingSenderId: "326170584256",
  appId: "1:326170584256:web:9290fed4a1408d1a387925"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Example function to get data from a Firestore collection
const getMovies = async () => {
  const moviesCollection = collection(db, "movies"); // 'movies' is the name of the collection
  const movieSnapshot = await getDocs(moviesCollection);
  const movieList = movieSnapshot.docs.map(doc => doc.data());
  return movieList;
};

export { auth, provider, db, getMovies };
