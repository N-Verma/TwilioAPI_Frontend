import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAKothdanFvsO66fJEu_g8sQB0zIIXEMnw",
    authDomain: "wapi-c3f3f.firebaseapp.com",
    databaseURL: "https://wapi-c3f3f.firebaseio.com",
    projectId: "wapi-c3f3f",
    storageBucket: "wapi-c3f3f.appspot.com",
    messagingSenderId: "947885538808",
}
app.initializeApp(config);
export const  auth = app.auth();
const googleProvider = new app.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user.displayName)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logout=()=>{
  auth.signOut().then((res)=>console.log("signed out"))
  .catch((error)=>console.log(error))
}
// const google=()=>{
//     app.initializeApp(config);
//     var auth = app.auth();
//     var db = app.database();
//     var provider = new firebase.auth.GoogleAuthProvider();
//         auth().signInWithPopup(provider).then(function(result) {
//             var token = result.credential.accessToken;
//             var user = result.user;
//             console.log(user);
//           }).catch(function(error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;
//          });
// }
// class Firebase {
//     constructor() {
//       app.initializeApp(config);
//       this.auth = app.auth();
//       this.db = app.database();
      
//     }
   
//     googleSignIn=()=>{
//         var provider = new firebase.auth.GoogleAuthProvider();
//         this.auth().signInWithPopup(provider).then(function(result) {
//             var token = result.credential.accessToken;
//             var user = result.user;
//             console.log(user);
//           }).catch(function(error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;
//          });
//     }
//     //Sign up function
//     doCreateUserWithEmailAndPassword = (email, password) =>
//       this.auth.createUserWithEmailAndPassword(email, password);

//     //Sign in function
//     doSignInWithEmailAndPassword = (email, password) =>
//       this.auth.signInWithEmailAndPassword(email, password);
    
//     //Log Out
//     doSignOut = () => this.auth.signOut();

//     // //password reset
//     // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
//     // //password change
//     // doPasswordUpdate = password =>
//     //   this.auth.currentUser.updatePassword(password);
//     user = uid => this.db.ref(`users/${uid}`);
//     users = () =>this.db.ref('users')
//   }
   
//   export default Firebase;
//   export {google}