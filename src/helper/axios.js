import axios from "axios";
export const postUser = async (userData) => {
  const rootApi = "http://localhost:8000";
  const userApi = rootApi + `/api/v1/user`;
  try {
    const { data } = await axios.post(userApi, userData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (userData) => {
  const rootApi = "http://localhost:8000";
  const userApi = rootApi + `/api/v1/user`;
  try {
    const { data } = await axios.post(userApi + "/login", userData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
