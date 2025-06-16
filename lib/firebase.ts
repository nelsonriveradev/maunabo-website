// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIDrzXdN6S_f0UOtHxRh6DsiO6qz421XI",
  authDomain: "maunabo-web-app.firebaseapp.com",
  projectId: "maunabo-web-app",
  storageBucket: "maunabo-web-app.firebasestorage.app",
  messagingSenderId: "1034690536036",
  appId: "1:1034690536036:web:12cf5a0221fb6d3147b571",
  measurementId: "G-B2KDE3KZQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
