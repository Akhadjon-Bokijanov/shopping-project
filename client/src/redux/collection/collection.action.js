import ShopActionTypes from './collection.action.types';
import {convertCollectionSnapShotToMap, firestore} from '../../firebase/firebase.utils'

export const updateCollections = (collectionsMap)=>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})

export const fetchCollectionsStart = ()=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap)=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsError = (error)=>({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error,
})

export const fetchCollectionsStartAsync = ()=>{
    return (dispatch) =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(async snapshot=>{
            const collectionsMap = convertCollectionSnapShotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error=>dispatch(fetchCollectionsError(error)))
    }
}