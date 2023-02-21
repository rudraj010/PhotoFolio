
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBEVXSMCMjPgpL_NMS409i0mM3C_-HdkDE",
    authDomain: "photofolio-ba625.firebaseapp.com",
    projectId: "photofolio-ba625",
    storageBucket: "photofolio-ba625.appspot.com",
    messagingSenderId: "903501820656",
    appId: "1:903501820656:web:9fccad4bb12e82668dc835"
  };

                 

  const app = initializeApp(firebaseConfig)

  const auth = getAuth();

  export {app,auth}