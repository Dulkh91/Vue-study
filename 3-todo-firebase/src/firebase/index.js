import { initializeApp } from 'firebase/app' ;
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUgHbsRsy6HCBDCKG2iptvus3RUvxVGYw',
  authDomain: 'todoapp-a8c70.firebaseapp.com',
  projectId: 'todoapp-a8c70',
  storageBucket: 'todoapp-a8c70.appspot.com',
  messagingSenderId: '941179589164',
  appId: '1:941179589164:web:68e1fbfbb29c5e20483789'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{
    db
}
