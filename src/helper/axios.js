import axios from "axios";

const rootApi = "http://localhost:8000";
const userApi = rootApi + `/api/v1/user`;
const bookApi = rootApi + `/api/v1/book`;
const burrowApi = rootApi + `/api/v1/burrow`;
export const getUserIdFromLocalStorage = () => {
  const str = localStorage.getItem("persist:userInfo");
  if (str) {
    const userInfo = JSON.parse(str);
    if (userInfo?.user) {
      const user = JSON.parse(userInfo.user);
      return user?._id;
    }
  }
  return null;
};

export const getUser = async () => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.get(userApi, options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getStudents = async () => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.get(userApi + "/students", options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
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

export const updateUser = async (formData) => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.put(userApi + "/update", formData, options);
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
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.post(bookApi, obj, options);
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
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.put(bookApi, obj, options);
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
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.delete(bookApi + "/" + _id, options);
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

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postBurrow = async (obj) => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.post(burrowApi, obj, options);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBurrowList = async () => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.get(burrowApi, options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateBurrow = async (burrowObj) => {
  try {
    const options = {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    };
    const { data } = await axios.put(burrowApi, burrowObj, options);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
