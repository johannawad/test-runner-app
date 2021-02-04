import { Test } from './Test';

export interface TestsState {
  data: Test[];
  loading: boolean;
  errors?: string;
}

export enum TestsActionTypes {
  FETCH_REQUEST = '@@tests/FETCH_REQUEST',
  FETCH_SUCCESS = '@@tests/FETCH_SUCCESS',
  FETCH_ERROR = '@@tests/FETCH_ERROR',
  RUN_ALL = '@@tests/RUN_ALL',
  UPDATE_TEST_STATUS = '@@tests/RUN_TEST'
}
