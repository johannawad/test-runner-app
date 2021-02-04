import { TestsActionTypes } from '../Types/Tests';
import { all, call, fork, put, select, takeLeading } from 'redux-saga/effects';
import TestsService from '../Services/Tests';
import { Test, TestStatus } from '../Types/Test';
import { TestStatusUpdatePayload } from '../Types/Payloads';
import {
  updateTestStatusAction,
  fetchTestsSuccessAction,
  fetchTestsErrorAction
} from '../Actions/tests.actions';

const getTests = ({ tests }: any): boolean => tests.data;

function* runTest(test: Test) {
  try {
    const payload: TestStatusUpdatePayload = {
      id: Number(test.id),
      status: TestStatus.Running
    };
    yield fork(TestsService.runTest, test);
    yield put(updateTestStatusAction(payload));
  } catch (e) {
    console.log(e);
  }
}

function* runAllTests() {
  try {
    const tests = yield select(getTests);
    yield all(tests.map((test: Test) => fork(runTest, test)));
  } catch (e) {
    //TO DO: Error handling
    console.log(e);
  }
}

function* fetchTestsSaga() {
  try {
    const response = yield call(TestsService.fetchTests);
    const tests = response.map((test: Test) => ({
      ...test,
      id: response.indexOf(test),
      status: TestStatus.NotStarted
    }));
    yield put(fetchTestsSuccessAction(tests));
  } catch (e) {
    yield put(fetchTestsErrorAction(e.message));
  }
}

function* testsSaga() {
  yield takeLeading(TestsActionTypes.FETCH_REQUEST, fetchTestsSaga);
  yield takeLeading(TestsActionTypes.RUN_ALL, runAllTests);
}

export default testsSaga;
