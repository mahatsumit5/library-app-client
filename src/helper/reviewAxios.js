import axios from "axios";
import { getUserIdFromLocalStorage } from "./axios";

const rootApi = "http://localhost:8000";
const reviewApi = rootApi + `/api/v1/review`;
export const postReview = async (obj) => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.post(reviewApi, obj, options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateReview = async (obj) => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.put(reviewApi, obj, options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getReview = async () => {
  try {
    const { data } = await axios.get(reviewApi);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteReview = async (_id) => {
  const options = {
    headers: {
      Authorization: getUserIdFromLocalStorage(),
    },
  };
  try {
    console.log(_id);
    const { data } = await axios.delete(reviewApi + "/" + _id, options);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
