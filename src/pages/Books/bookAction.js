import React from "react";
import { getBook, postBook, updateBook, deleteBook } from "../../helper/axios";
import { toast } from "react-toastify";
import { setbooks } from "./bookSlice";
export const postBookAction = (bookObj) => async (dispatch) => {
  const bookPending = postBook(bookObj);
  toast.promise(bookPending, { pending: "Please wait...." });

  const { status, message } = await bookPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
  }
};
export const updateBookAction = (bookObj) => async (dispatch) => {
  const bookPending = updateBook(bookObj);
  toast.promise(bookPending, { pending: "Please wait...." });

  const { status, message } = await bookPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
  }
};
export const deleteBookAction = (_id) => async (dispatch) => {
  console.log(_id);
  const bookPending = deleteBook(_id);
  toast.promise(bookPending, { pending: "Please wait...." });

  const { status, message } = await bookPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
    return true;
  }
};
export const fetchBookAction = () => async (dispatch) => {
  const { status, message, books } = await getBook();

  if (status === "success") {
    dispatch(setbooks(books));
  }
};
