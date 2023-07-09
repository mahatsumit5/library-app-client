import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  studentList: [],
};

const studentListSlice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    setStudentList: (state, { payload }) => {
      state.studentList = payload;
    },
  },
});

const { reducer, actions } = studentListSlice;
export const { setStudentList } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
