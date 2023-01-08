import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as logInReducer} from './reducers/logInReducer';

// Our reducers are combined in rootReducer
const rootReducer = combineReducers({
  logIn: logInReducer,
});

// The store is created from from our core reducer
const store = configureStore({
  reducer: rootReducer,
});

export {store};
