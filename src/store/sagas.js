import { put, takeLatest, all } from "redux-saga/effects";
import { actionConstants } from "../utils/constants";
import { showUserData } from "./action";

function* loginRequest(action) {
  yield takeLatest(actionConstants.LOGIN_REQUEST, dataUser);
}

function* dataUser(action) {
  try {
    yield put(showUserData(action.payload));
  } catch (e) {
    console.log(e)
  }
}

export default function* rootSaga() {
  yield all([loginRequest()]);
}
