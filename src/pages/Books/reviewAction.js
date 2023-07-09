import { postReview } from "../../helper/reviewAxios";
import { toast } from "react-toastify";

export const postReviewAction = async (reviewObj) => {
  //   console.log(reviewObj);
  const { status, message } = await postReview(reviewObj);
  toast[status](message);
  console.log(status);

  if (status === "success") {
  }
};
