import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    foo: "bar",
    selectedStation: "haddonfield",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setSelectedStation: (state, action) => {
      state.selectedStation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setSelectedStation } = appSlice.actions;

export default appSlice.reducer;
