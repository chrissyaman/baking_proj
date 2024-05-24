
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxcdu0Z6w3aA_HYv4gceqetmcMA85tSPY",
    authDomain: "baking-project-48085.firebaseapp.com",
    projectId: "baking-project-48085",
    storageBucket: "baking-project-48085.appspot.com",
    messagingSenderId: "129957297954",
    appId: "1:129957297954:web:eba0f8118c97b38bdf6f7b"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;