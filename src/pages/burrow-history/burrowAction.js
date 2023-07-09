import { getBurrowList, postBurrow, updateBurrow } from "../../helper/axios";
import { toast } from "react-toastify";
import { fetchBookAction } from "../Books/bookAction";
import { setBurrow } from "./burrowSlice";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);
  if (status === "success") {
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, burrowList } = await getBurrowList();
  if (status === "success") {
    dispatch(setBurrow(burrowList));
  }
};

export const updateBurrowAction = (burrowObj) => async (dispatch) => {
  const { status, message } = await updateBurrow(burrowObj);
  toast[status](message);
  console.log(status);
  if (status === "success") {
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }
};
