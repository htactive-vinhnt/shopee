import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {getCard, addToCard} from '../../firebase/card';
import {
    addToCardSuccess,addToCardFalsed, getCardUserFalsed,getCardUserSuccess
} from "./action";
import * as types from "./types";

function* addToCardSaga(action) {
  
  try {
    const ref = addToCard(action.payload.userID)
    console.log('da vao',action.payload);
    const resData = yield [
      call([ref, ref.push], action.payload.prodcutID)
    ];

    console.log('log saga add to card', resData);
    if (resData) {
      yield put(addToCardSuccess(resData));
    }
  } catch (error) {
    const errs = error.response.data.message;

    yield put(addToCardFalsed(errs));
  }
}

function* getCardSaga(action) {
 
  try {
    
    const ref = addToCard(action.payload.userID, action.prodcutID) 
    
    const resData = yield call(ref)
    console.log('da vao', action.payload);

    console.log('log saga add to card', resData);
    if (resData) {
      yield put(addToCardSuccess(resData));
    }
  } catch (error) {
    const errs = error.response.data.message;

    yield put(addToCardFalsed(errs));
  }
}



export function* cardSaga() {
 
  yield takeEvery(types.ADD_TO_CART_OF_USER, addToCardSaga);
  yield takeEvery(types.GET_ALL_ORDER_OF_USER, getCardSaga);

}