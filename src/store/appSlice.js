import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "counter",
  initialState: {
    selectedStation: "haddonfield",
    selectedDirection: "wb",
    apiData: null,
  },
  reducers: {
    setSelectedStation: (state, action) => {
      state.selectedStation = action.payload;
    },
    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setSelectedDirection: (state, action) => {
      state.selectedDirection = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedStation, setApiData, setSelectedDirection } =
  appSlice.actions;

export default appSlice.reducer;
