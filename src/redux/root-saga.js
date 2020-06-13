import {all, call} from 'redux-saga/effects';

import { collectionSagas } from './collection/collection.saga';
import { userSagas } from './user/user.saga';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga(){
    yield all([
        call(collectionSagas),
        call(userSagas),
        call(cartSagas)
    ])
}