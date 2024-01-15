import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiGbZ8GoVWqYHNADnZHpEaWg_4b9f-aPI",
  authDomain: "react-dashboard-d1e38.firebaseapp.com",
  projectId: "react-dashboard-d1e38",
  storageBucket: "react-dashboard-d1e38.appspot.com",
  messagingSenderId: "131623402076",
  appId: "1:131623402076:web:d4ad26b6177ccc97280499",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
