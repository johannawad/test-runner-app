import { Test, TestStatus } from '../Types/Test';
import { TestsActionTypes } from '../Types/Tests';
import * as actions from './tests.actions';

describe('testsActions', () => {
  it('should trigger an action to fetch tests', () => {
    const expectedAction = {
      type: TestsActionTypes.FETCH_REQUEST
    };
    expect(actions.fetchTestsRequestAction()).toEqual(expectedAction);
  });

  it('should trigger an action to add tests', () => {
    const tests: Test[] = [
      { description: 'uploads go in both directions', run: jest.fn },
      { description: 'PDFs are adequately waterproof', run: jest.fn }
    ];
    const expectedAction = {
      type: TestsActionTypes.FETCH_SUCCESS,
      payload: tests
    };
    expect(actions.fetchTestsSuccessAction(tests)).toEqual(expectedAction);
  });

  it('should trigger an action to add error', () => {
    const error = 'Error';
    const expectedAction = {
      type: TestsActionTypes.FETCH_ERROR,
      payload: error
    };
    expect(actions.fetchTestsErrorAction(error)).toEqual(expectedAction);
  });

  it('should trigger an action to run all tests', () => {
    const expectedAction = {
      type: TestsActionTypes.RUN_ALL
    };
    expect(actions.runAllAction()).toEqual(expectedAction);
  });

  it.each([
    TestStatus.Failed,
    TestStatus.Passed,
    TestStatus.Running,
    TestStatus.NotStarted
  ])('should trigger an action to update test status', (status) => {
    const payload = { id: 1, status };
    const expectedAction = {
      type: TestsActionTypes.UPDATE_TEST_STATUS,
      payload
    };
    expect(actions.updateTestStatusAction(payload)).toEqual(expectedAction);
  });
});
