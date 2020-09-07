import { all } from 'redux-saga/effects';
import {cardSaga} from './Card/saga';


export default function* rootSaga() {
    yield all([
        cardSaga(),
    ]);
}