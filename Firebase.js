import * as firebase from 'react-native-firebase';

 
export default class Firebase {
    static initialize(){
        firebase.initializeApp({
            apiKey: "AIzaSyCNcde-AQjdFODvOVQbh6-oTwgqczxYiVw",
            authDomain: "barhopperapp1.firebaseapp.com",
            databaseURL: "https://barhopperapp1.firebaseio.com",
            projectId: "barhopperapp1",
            storageBucket: "barhopperapp1.appspot.com",
            messagingSenderId: "158707986434"
        });
    }
}
module.exports = Firebase;