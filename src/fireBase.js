import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxznLB5vlVQDnhXNnmxTVS8xWVENtrlAk",
  authDomain: "frity-7f372.firebaseapp.com",
  projectId: "frity-7f372",
  storageBucket: "frity-7f372.appspot.com",
  messagingSenderId: "199190768625",
  appId: "1:199190768625:web:4eb78e99e752ebd86d7250"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app