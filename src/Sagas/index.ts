import { fork } from 'redux-saga/effects';
import testsSaga from './tests.saga';

export function* rootSaga() {
  yield fork(testsSaga);
}
