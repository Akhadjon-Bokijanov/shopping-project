import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyD46RyCA3hmOfcJrKls-1G8op8zTtJrJ3w",
    authDomain: "my-shopping-project-8cb79.firebaseapp.com",
    databaseURL: "https://my-shopping-project-8cb79.firebaseio.com",
    projectId: "my-shopping-project-8cb79",
    storageBucket: "my-shopping-project-8cb79.appspot.com",
    messagingSenderId: "264303672184",
    appId: "1:264303672184:web:dce15ac84cc97b21ec268d",
    measurementId: "G-SVY651WV71"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;

      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      }

      catch(error)
      {
        console.error('error creating user: ', error.messsage);
        
      }

    }
    
    return userRef;
}


export const convertCollectionSnapShotToMap = (collections)=>{
  const transfromedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transfromedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator
  }, {})
}


export const AddCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const provider1 = new firebase.auth.GithubAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
provider1.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export const signInWithGitHub = ()=> auth.signInWithPopup(provider1);

export default firebase;