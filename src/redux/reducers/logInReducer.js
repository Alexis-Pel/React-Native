import {createSlice} from '@reduxjs/toolkit';

// le slice va créer le reducer et les actions pour nous
const slice = createSlice({
  name: 'logIn',
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

const {reducer, actions} = slice;

export {reducer, actions};
