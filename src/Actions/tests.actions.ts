import { TestStatusUpdatePayload } from '../Types/Payloads';
import { Test } from '../Types/Test';
import { TestsActionTypes } from '../Types/Tests';

export function fetchTestsRequestAction() {
  return {
    type: TestsActionTypes.FETCH_REQUEST
  };
}

export function fetchTestsSuccessAction(tests: Test[]) {
  return {
    type: TestsActionTypes.FETCH_SUCCESS,
    payload: tests
  };
}

export function fetchTestsErrorAction(error: string) {
  return {
    type: TestsActionTypes.FETCH_ERROR,
    payload: error
  };
}

export function runAllAction() {
  return {
    type: TestsActionTypes.RUN_ALL
  };
}

export function updateTestStatusAction(payload: TestStatusUpdatePayload) {
  return {
    type: TestsActionTypes.UPDATE_TEST_STATUS,
    payload: payload
  };
}
