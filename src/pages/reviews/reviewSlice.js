import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviews: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

const { reducer, actions } = reviewSlice;
export const { setReviews } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
