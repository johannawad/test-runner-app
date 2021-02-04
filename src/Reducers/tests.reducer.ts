import { Test } from '../Types/Test';
import { TestsActionTypes, TestsState } from '../Types/Tests';

const initialState: TestsState = {
  data: [],
  loading: false,
  errors: undefined
};

export const tests = (state: TestsState = initialState, action: any) => {
  switch (action.type) {
  case TestsActionTypes.FETCH_REQUEST: {
    return {
      ...state,
      loading: true
    };
  }
  case TestsActionTypes.FETCH_SUCCESS: {
    return {
      ...state,
      loading: false,
      data: action.payload
    };
  }
  case TestsActionTypes.FETCH_ERROR: {
    return {
      ...state,
      loading: false,
      errors: action.payload
    };
  }
  case TestsActionTypes.RUN_ALL: {
    return {
      ...state,
      loading: false
    };
  }
  case TestsActionTypes.UPDATE_TEST_STATUS: {
    return {
      ...state,
      data: state.data.map((test: Test) => {
        if (test.id !== action.payload.id) {
          return test;
        }
        return {
          ...test,
          status: action.payload.status
        };
      })
    };
  }
  default: {
    return state;
  }
  }
};
