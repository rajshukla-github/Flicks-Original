import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBcurAVkiMAPoXL4pqk7WPJ43wVis3N8V0",
  authDomain: "flick-76996.firebaseapp.com",
  projectId: "flick-76996",
  storageBucket: "flick-76996.appspot.com",
  messagingSenderId: "1035532725299",
  appId: "1:1035532725299:web:8c457b2628dae81f2d0746"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth =firebase.auth();


export { auth };
export default db;