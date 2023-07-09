import axios from "axios";

const rootApi = "http://localhost:8000";
const reviewApi = rootApi + `/api/v1/review`;
export const postReview = async (obj) => {
  try {
    console.log(obj);
    const { data } = await axios.post(reviewApi, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
