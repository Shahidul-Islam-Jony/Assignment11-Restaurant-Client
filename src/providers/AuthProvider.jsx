import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user creating by email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUser = (name, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    // login user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const loginByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // logout user
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = {email: currentUser?.email || user?.email};
            setUser(currentUser);
            setLoading(false);
            // jwt token
            if (currentUser) {
                axios.post('http://localhost:5000/api/v1/jwt', userEmail, { withCredentials: true })
                    .then(result => {
                        console.log(result.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/api/v1/logout',userEmail,{
                    withCredentials:true
                })
                .then(result=>{
                    console.log(result);
                })
            }

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        logout,
        login,
        loginByGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;