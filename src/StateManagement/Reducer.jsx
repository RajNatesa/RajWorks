import { createReducer } from "@reduxjs/toolkit";

const initialState = { count: 0, list: [], cart: [], isAuthenticated: false };

export const customReducer = createReducer(initialState, {
  updateList: (state, action) => {
    state.list = action.payload; // payload
  },
  updateCart: (state, action) => {
    state.cart = action.payload;
  },
});
