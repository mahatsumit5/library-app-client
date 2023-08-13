import {
  getUser,
  loginUser,
  updateImage,
  updateUser,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setUser } from "./userSlice";
import { fetchStudentAction } from "../Students/studentAction";
export const signInAdminAction = (userObj) => async (dispatch) => {
  const { status, message, user } = await loginUser(userObj);
  toast[status](message);
  user?._id && dispatch(setUser(user));
  user?.role === "admin" && dispatch(fetchStudentAction());
};

export const updateUserAction = (userObj) => async (dispatch) => {
  const { status, message, user } = await updateUser(userObj);
  toast[status](message);
  user?._id && dispatch(setUser(user));
  dispatch(getUserAction());
};

export const uploadImgAction = (userObj) => async (dispatch) => {
  const { status, message, user } = await updateImage(userObj);
  console.log(userObj);
  toast[status](message);
  user?._id && dispatch(setUser(user));
  dispatch(getUserAction());
};
export const getUserAction = () => async (dispatch) => {
  const { user } = await getUser();
  user?._id && dispatch(setUser(user));
};
