import {createSelector} from 'reselect';


const selectCollection = (state)=> state.shop;

export const selectCollectionItems = createSelector(
    [selectCollection],
    collections => collections.collection
)

export const selectCollectionsForPreview = createSelector(
    [selectCollectionItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollectionId = (collectionUrlParam)=>createSelector(
    [selectCollectionItems],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
    [selectCollection],
    collection=>collection.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectCollection],
    collections=> !!collections.collection
)