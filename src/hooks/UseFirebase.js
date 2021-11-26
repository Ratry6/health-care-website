import { useEffect, useState } from "react";
import FirebaseInitialization from "../Firebase/Firebase.init";
import {  getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword ,createUserWithEmailAndPassword , updateProfile  } from "firebase/auth";


FirebaseInitialization();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user,setUser] =  useState({});
    
    


//sign in through google
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }
//sign in through email and password
    const signInUsingEmail = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
//create new user for sign up
    const createUserUsingEmail = (email, password) =>{
return createUserWithEmailAndPassword(auth, email, password);


    }

    //update user profile
    const updateUserProfile = (name) =>{
        return updateProfile(auth.currentUser , {displayName : name});
    }
            //auth state
        useEffect(()=>{
            onAuthStateChanged(auth, user=>{
                if(user){
                    setUser(user);
                }
            })
        },[]);

        //sign out
        const logout = () =>{
            signOut(auth).then(() => {
                setUser({});
              }).catch((error) => {
                
              });
        }
    return{
        user,
        signInUsingGoogle,
        signInUsingEmail,
        createUserUsingEmail,
        updateUserProfile,
        logout
    }

}

export default useFirebase;