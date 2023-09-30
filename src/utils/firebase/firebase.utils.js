import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBy1Tmb0wNCYetHBf-AWYywYP1O3NQLh3w",
  authDomain: "crwn-clothing-398b1.firebaseapp.com",
  projectId: "crwn-clothing-398b1",
  storageBucket: "crwn-clothing-398b1.appspot.com",
  messagingSenderId: "75179124738",
  appId: "1:75179124738:web:c5390cee01184a35e19f1b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error creatin the user', error.message);
    }
  }
}





