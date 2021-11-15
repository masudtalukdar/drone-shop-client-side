import {
  getAuth,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialize from '../Components/Login/firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

firebaseInitialize();

const UseFirebase = () => {
  const auth = getAuth();
  const [error, setError] = useState('');
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const createUserWithEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUser(result.user, name);
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const LogOut = () => {
    signOut(auth).then((res) => {
      console.log(res);
      setUser({});
    });
  };

  return {
    googleSignIn,
    createUserWithEmail,
    signInWithEmail,
    LogOut,
    user,
    error,
  };
};

export default UseFirebase;
