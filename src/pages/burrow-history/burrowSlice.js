import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  burrows: [],
};

const burrowSlice = createSlice({
  name: "burrow",
  initialState,
  reducers: {
    setBurrow: (state, { payload }) => {
      state.burrows = payload;
    },
  },
});

const { reducer, actions } = burrowSlice;
export const { setBurrow } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
