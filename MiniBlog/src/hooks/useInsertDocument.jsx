import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "INSERTED_DOCUMENT":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState);

    const [cancelled, setCancelled] = useState(false);

    const checkIfIsCancelled = (action) => {
        if(!cancelled) {
            dispatch(action);
        }
    }

    const insertDocument = async (document) => {
        checkIfIsCancelled({ type: "LOADING" });
        
        try{
            const newDocument = { ...document, createdAt: Timestamp.now() };
            const insertedDocument = await addDoc(collection(db, docCollection), newDocument);
            checkIfIsCancelled({
                type: "INSERTED_DOCUMENT",
                payload: insertedDocument,
            });
        } catch (error) {
            checkIfIsCancelled({
                type: "ERROR",
                payload: error.message,
            });
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { insertDocument, response };
};