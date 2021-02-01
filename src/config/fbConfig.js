import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCIVpcccuK8IKhwGqY4UysrfikDI-Og__8",
    authDomain: "yash-phonebook.firebaseapp.com",
    projectId: "yash-phonebook",
    storageBucket: "yash-phonebook.appspot.com",
    messagingSenderId: "816838995462",
    appId: "1:816838995462:web:70adb6a6dfa3a7b7d15d87",
    measurementId: "G-GXJZ7MS43Y"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapShots:true});

  export default firebase;