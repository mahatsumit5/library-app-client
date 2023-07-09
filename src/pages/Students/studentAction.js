import { getStudents } from "../../helper/axios";
import { setStudentList } from "./studentSlice.js";

export const fetchStudentAction = () => async (dispatch) => {
  const { status, studentList } = await getStudents();
  if (status === "success") {
    dispatch(setStudentList(studentList));
  }
};
