//@ flow
import * as firebase from "firebase";

  const config = {
    apiKey: "AIzaSyD5DIJen29jZ5a89FneKVtE8tXEUXvJS1Q",
    authDomain: "barhopper-83e3a.firebaseapp.com",
    databaseURL: "https://barhopper-83e3a.firebaseio.com",
    projectId: "barhopper-83e3a",
    storageBucket: "barhopper-83e3a.appspot.com",
    messagingSenderId: "494148410560"
  };
  
export default class Firebase {
    static auth;
    static init() {
        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();
    }
   

}