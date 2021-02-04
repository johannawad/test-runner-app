import { combineReducers } from 'redux';
import { tests } from './tests.reducer';
const rootReducer = combineReducers({
  tests
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
