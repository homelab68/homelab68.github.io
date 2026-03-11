import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxvT3dDyeabuNMGnJFgu1b_Zuh3sfeLlk",
  authDomain: "homelab68-io.firebaseapp.com",
  projectId: "homelab68-io",
  storageBucket: "homelab68-io.firebasestorage.app",
  messagingSenderId: "150703747826",
  appId: "1:150703747826:web:787043a9d9d5bfef36166b",
  measurementId: "G-VTB06DQX6V",
};

let app: FirebaseApp;
let analytics: Analytics | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (typeof app === "undefined") {
    app = initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirebaseAnalytics(): Analytics | null {
  if (typeof window === "undefined") return null;
  if (!analytics) {
    app = getFirebaseApp();
    analytics = getAnalytics(app);
  }
  return analytics;
}
