import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {reducer as logInReducer} from './reducers/logInReducer';

// on combine nos reducers dans un reducer racine
const rootReducer = combineReducers({
  logIn: logInReducer,
});

// on créé le store à partir de notre reducer racine
const store = configureStore({
  reducer: rootReducer,
});

export {store};
