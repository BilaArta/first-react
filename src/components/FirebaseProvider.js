import React, {useContext} from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import FirebaseConfig  from "../config/firebase";

import {userAuthState, useAuthState} from "react-firebase-hooks/auth";

const FirebaseContext = React.createContext();

export function useFirebase() {
    return useContext(FirebaseContext);
}


function FirebaseProvider(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const storage = firebase.storage();

    const {user, loading, error} = useAuthState(auth);

    return <FirebaseContext value={{
        auth,
        firestore,
        storage,
        user,
        loading, 
        error
    }}>
        {props.children}
    </FirebaseContext>
}

export default FirebaseProvider;