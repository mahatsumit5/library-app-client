import axios from "axios";

const rootApi = "http://localhost:8000";
const userApi = rootApi + `/api/v1/user`;
const bookApi = rootApi + `/api/v1/book`;
export const postUser = async (userData) => {
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
export const postBook = async (obj) => {
  try {
    const { data } = await axios.post(bookApi, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const updateBook = async (obj) => {
  try {
    const { data } = await axios.put(bookApi, obj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getBook = async () => {
  try {
    const { data } = await axios.get(bookApi);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deleteBook = async (_id) => {
  try {
    console.log(_id);
    const { data } = await axios.delete(bookApi + "/" + _id);
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
