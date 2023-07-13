import { createStore, combineReducers } from 'redux';
import reducer from '../module/user';

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer);

export default store;
