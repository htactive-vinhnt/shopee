import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import firebase from '../../firebase/firebase';
import {
    getAllproductFalsed,
    getAllproductSuccess
} from "./action";
import * as types from "./types";

function* getAllProductSaga(action) {
  try {
    const resData = yield call(firebase.database().ref('products/').on('value'))

    if (resData.data.data) {
      yield put(getAllproductSuccess(resData.data.data));
    }
  } catch (error) {
    const errs = error.response.data.message;

    yield put(getAllproductFalsed(errs));
    ToastError(errs);
  }
}



export function* adminSaga() {
 
  yield takeEvery(types.GET_ALL_PRODUCT, getAllProductSaga);

}