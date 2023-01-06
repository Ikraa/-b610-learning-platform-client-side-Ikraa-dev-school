// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcXvkTqHuffpjQezaNYEnEavUyiqjcdI",
  authDomain: "dev-school-4b743.firebaseapp.com",
  projectId: "dev-school-4b743",
  storageBucket: "dev-school-4b743.appspot.com",
  messagingSenderId: "498513119496",
  appId: "1:498513119496:web:54cc3a0cc82081fd3c04bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth