import { db } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";


export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    //clean up function
        //dealing with memory leaks
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();
    const checkIfIsCancelled = () => {
        if(cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();
        setError(null);
        setLoading(true);

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false); 
            return user;
        } catch (error) {
            console.log(error.message);
            let systemErrorMEssage;
            if(error.message.includes("Password")){
                systemErrorMEssage = "A senha precisa conter pelo menos 6 caracteres.";
            }
            else if(error.message.includes("email-already")){
                systemErrorMEssage = "E-mail já cadastrado";
            }
            else{
                systemErrorMEssage = "Ocorreu um erro, por favor tente mais tarde."
            }
            setError(systemErrorMEssage);
            setLoading(false);
        }
               
    };
    useEffect(() => {
        return () => setCancelled(true);
    }, [])
    
    return {
        auth,
        createUser,
        error,
        loading,
    }
};