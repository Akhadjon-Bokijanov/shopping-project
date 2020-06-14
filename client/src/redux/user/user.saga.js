import { takeLatest, all, call, put } from 'redux-saga/effects';
import { UserActionTypes } from './user.action.types';
import {googleProvider, githubProvider, auth, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess} from './user.actions';

export function* getSnapShotFromUserAuth(user, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, user, additionalData);
        const userSnapshot = yield userRef.get();
        console.log(userSnapshot)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }
    catch(error)
    {
        yield put(signInFailure(error));
    }
}

export function* googleSignIn(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotFromUserAuth(user);
    }
    catch(error)
    {
        yield put(signInFailure(error));
    }
}

export function* githubSignIn(){
    try{
        const {user} = yield auth.signInWithPopup(githubProvider)
        yield getSnapShotFromUserAuth(user)
    }
    catch(error)
    {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);

    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSessions(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}


export function* onGithubSignInStart(){
    yield takeLatest(UserActionTypes.GITHUB_SIGN_IN_START, githubSignIn)
}

export function* emailSignIn({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload: {email, password, displayName}}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);

        //yield createUserProfileDocument(user, {displayName});
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSucces(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onGithubSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSucces)
    ])
}

