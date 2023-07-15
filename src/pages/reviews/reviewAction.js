import {
  deleteReview,
  getReview,
  postReview,
  updateReview,
} from "../../helper/reviewAxios";
import { toast } from "react-toastify";
import { setReviews } from "./reviewSlice";

export const postReviewAction = (review) => async (dispatch) => {
  const { status, message } = await postReview(review);
  toast[status](message);
  if (status === "success") {
    dispatch(getReviewAction());
  }
};

export const getReviewAction = () => async (dispatch) => {
  const { status, message, reviewList } = await getReview();
  if (status === "success") {
    dispatch(setReviews(reviewList));
  }
};
export const updateReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await updateReview(obj);
  if (status === "success") {
    dispatch(getReviewAction());
  }
};

export const deleteReviewAction = (_id) => async (dispatch) => {
  const { status, message } = await deleteReview(_id);
  toast[status](message);
  if (status === "success") {
    dispatch(getReviewAction());
  }
};
