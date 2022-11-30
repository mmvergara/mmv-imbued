import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../Config";


const app = initializeApp(firebaseConfig);



export const authFB = getAuth()