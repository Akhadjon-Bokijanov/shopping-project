import {createSelector} from 'reselect';


const selectCollection = (state)=> state.shop;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collections => collections.collection
)

export const selectCollectionsForPreview = createSelector(
    [selectCollectionItems],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollectionId = (collectionUrlParam)=>createSelector(
    [selectCollectionItems],
    collections => collections[collectionUrlParam]
)