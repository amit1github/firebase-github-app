import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHveaUyO-pHWVZIhozSlzfxYVzFFyYJvw",
  authDomain: "my-git-app-lco.firebaseapp.com",
  projectId: "my-git-app-lco",
  storageBucket: "my-git-app-lco.appspot.com",
  messagingSenderId: "169739473468",
  appId: "1:169739473468:web:ac885043698bf47f64a939",
  measurementId: "G-RERMEG5EBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)