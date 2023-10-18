import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.cofig';
import { GoogleAuthProvider } from "firebase/auth";



const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email,password) => {
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  }

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo,
    })
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  }

  const signOutUser = () => {
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        console.log(user);
        setUser(user);
        setLoading(false);
    })

    return () => {
      unsubscribe();
    }
  },[])

  const authData = {
    loading,
    user,
    createUser,
    profileUpdate,
    signIn,
    googleSignIn,
    signOutUser,
  }
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider