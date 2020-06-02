import {createSelector} from 'reselect';


const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    women: 4,
    mens: 5
}
const selectCollection = (state)=> state.shop;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collections => collections.collection
)

export const selectCollectionId = (collectionUrlParam)=>createSelector(
    [selectCollectionItems],
    collection => collection.find(collection=> collection.id ===COLLECTION_ID_MAP[collectionUrlParam])
)