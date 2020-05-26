import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD46RyCA3hmOfcJrKls-1G8op8zTtJrJ3w",
    authDomain: "my-shopping-project-8cb79.firebaseapp.com",
    databaseURL: "https://my-shopping-project-8cb79.firebaseio.com",
    projectId: "my-shopping-project-8cb79",
    storageBucket: "my-shopping-project-8cb79.appspot.com",
    messagingSenderId: "264303672184",
    appId: "1:264303672184:web:dce15ac84cc97b21ec268d",
    measurementId: "G-SVY651WV71"
}

firebase.initializeApp(config);

//#region create user profile

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get()
    // console.log(snapShot);

    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log("Error: not created new User: ", error);
        }
    }

    return userRef;
}

//#endregion

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


