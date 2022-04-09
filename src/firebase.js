import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./Config/firebaseConfig";


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { auth };