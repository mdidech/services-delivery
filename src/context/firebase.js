import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_APIKEY}`,
//   authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
//   databaseURL: `${process.env.REACT_APP_DATABASEURL}`,
//   projectId: `${process.env.REACT_APP_PROJECTID}`,
//   storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
//   messagingSenderId: `${process.env.REACT_APP_MESSAGEINGSENDERID}`,
//   appId: `${process.env.REACT_APP_APPID}`,
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
//initialize Firebase
app.initializeApp(firebaseConfig);

const firebase = app.firestore();
export const firebaseAuth = app.auth();
export const firebaseStorage = app.storage();
export default firebase;
