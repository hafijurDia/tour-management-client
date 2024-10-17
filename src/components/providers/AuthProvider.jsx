/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const name = "Hafijur Rahman";

  // Function to create a user with email and password
  const createUser = (email, password, name, photo) => {
    setLoading(true); // Optional: to indicate loading
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update profile with name and photoURL after account creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          // Update current user state after profile update
          setCurrentUser(auth.currentUser);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });

        setLoading(false); // Stop loading once done
        return userCredential; // Return user info if needed
      })
      .catch((error) => {
        setLoading(false); // Stop loading on error
        console.error("Error creating user:", error.message);
        throw error; // Rethrow to handle the error in your component
      });
  };


  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password) // Pass `auth` as the first argument
      .then((userCredential) => {
        setLoading(false);
        return userCredential; // Return the user credentials if needed
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error logging in:", error.message);
        throw error; // Rethrow to handle the error in your component
      });
  };


const userLogout = () => {
  setLoading(true);
  return signOut(auth);
}

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Stop loading once user state is known
    });
    
    return () => unsubscribe(); // Cleanup subscription
  }, [loading]);
      // Values provided to the context
  const userInfo = {
    currentUser,
    name,
    createUser,
    loginUser,
    userLogout,
    loading,
    setLoading,

  };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {

};


export default AuthProvider;
