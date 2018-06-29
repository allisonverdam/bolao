import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCChzih6huV5peLkdffS7LuXjulkolCyDo",
  authDomain: "bolao-11f41.firebaseapp.com",
  databaseURL: "https://bolao-11f41.firebaseio.com",
  projectId: "bolao-11f41",
  storageBucket: "bolao-11f41.appspot.com",
  messagingSenderId: "982777226764"
};

const devConfig = {
  apiKey: "AIzaSyCChzih6huV5peLkdffS7LuXjulkolCyDo",
  authDomain: "bolao-11f41.firebaseapp.com",
  databaseURL: "https://bolao-11f41.firebaseio.com",
  projectId: "bolao-11f41",
  storageBucket: "bolao-11f41.appspot.com",
  messagingSenderId: "982777226764"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
