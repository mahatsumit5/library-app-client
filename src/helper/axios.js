import axios from "axios";
const postUser = async (data) => {
  const rootApi = "http://localhost:8000";
  const userApi = `${rootApi}+/api/v1/user`;
  try {
    const resp = await axios.post(userApi, data);
    console.log(resp);
    return resp.data;
  } catch (error) {
    return {
      statue: "error",
      message: error.message,
    };
  }
};
