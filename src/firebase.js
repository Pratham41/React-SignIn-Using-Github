import firebase from 'firebase';

const firebaseConfig = {
  //your api keys
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { auth, provider };
export default db;
