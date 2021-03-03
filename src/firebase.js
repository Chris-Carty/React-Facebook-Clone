import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATnG9vSZB7355fm7q_hl71VgwaV7reWmE",
  authDomain: "facebook-clone-b6745.firebaseapp.com",
  projectId: "facebook-clone-b6745",
  storageBucket: "facebook-clone-b6745.appspot.com",
  messagingSenderId: "676672451880",
  appId: "1:676672451880:web:c6659784828b77685c0c1d",
  measurementId: "G-S3S52PTF1T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
