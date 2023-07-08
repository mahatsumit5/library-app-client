import { postBurrow } from "../../helper/axios";
import { toast } from "react-toastify";
export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  //fetch use burrow
};
