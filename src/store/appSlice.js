import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    foo: "bar",
    selectedStation: "haddonfield",
    apiData: null,
  },
  reducers: {
    setSelectedStation: (state, action) => {
      state.selectedStation = action.payload;
    },
    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedStation, setApiData } = appSlice.actions;

export default appSlice.reducer;
