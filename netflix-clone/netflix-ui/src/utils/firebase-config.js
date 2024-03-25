import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //should include your firebase api keys
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
