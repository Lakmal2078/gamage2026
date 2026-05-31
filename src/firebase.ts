import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5Kr7Xizdax5IXdXeheCFnmi4TgSk_SkU",
  authDomain: "gamage-marketing-a1d31.firebaseapp.com",
  projectId: "gamage-marketing-a1d31",
  storageBucket: "gamage-marketing-a1d31.firebasestorage.app",
  messagingSenderId: "659726148871",
  appId: "1:659726148871:web:ad9c83ec2d574bc0dcd1a2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
