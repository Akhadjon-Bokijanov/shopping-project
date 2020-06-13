import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './collection.action.types';
import {firestore, convertCollectionSnapShotToMap} from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsError } from './collection.action'

export function* fetchCollectionsAscy(){
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapShop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapShotToMap, snapShop);

        yield put(fetchCollectionsSuccess(collectionsMap))
    }
    catch(error){
        yield put(fetchCollectionsError(error))
    }

}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAscy)
}

export function* collectionSagas(){
    yield all([
        call(fetchCollectionsStart),
    ])
}