// web app's firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCa7VrM0ZtHE70HHtUeyci7b5KY55eWr_Y",
  authDomain: "realtime-chat-room-35c32.firebaseapp.com",
  projectId: "realtime-chat-room-35c32",
  storageBucket: "realtime-chat-room-35c32.appspot.com",
  messagingSenderId: "208913991215",
  appId: "1:208913991215:web:1bc843b45917a728a828da",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
