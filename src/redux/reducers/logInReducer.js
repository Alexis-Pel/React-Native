import {createSlice} from '@reduxjs/toolkit';

// Slice will create our reduers and it's actions
const slice = createSlice({
  name: 'logIn',
  initialState: {
    isLoggedIn: false,
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
