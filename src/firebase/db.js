import { db, auth } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...


// Auth

export const getAuthenticatedUser = () => db.ref('users/'+auth.currentUser.uid).once('value')
  
