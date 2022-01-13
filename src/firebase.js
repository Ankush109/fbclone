// import { initializeApp} from 'firebase/app';
// import { getFirestore} from 'firebase/firestore/lite';
// import { getAuth} from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7vUf_riMFDvtb-dx1rDDbVA-Mo3L0pUM",
    authDomain: "fb-clone-4587c.firebaseapp.com",
    projectId: "fb-clone-4587c",
    storageBucket: "fb-clone-4587c.appspot.com",
    messagingSenderId: "61291690015",
    appId: "1:61291690015:web:16b63953c452b474e9bd2a",
    measurementId: "G-68DB9B543X"
  };

  // const app = initializeApp(firebaseConfig);
  // const db =getFirestore(app);
  // const auth = getAuth();
  // const provider = new GoogleAuthProvider();
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db= firebase.firestore();
const auth = firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;