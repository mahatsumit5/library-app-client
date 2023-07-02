import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomeInput from "../custome-input/CustomeInput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import {
  deleteBookAction,
  updateBookAction,
} from "../../pages/Books/bookAction";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useParams();

  const { user } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((item) => item._id === _id);
      selectedBook?._id && setForm(selectedBook);
    }
  }, [_id, form._id, books]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookAction(form));
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure Mate?")) {
      const isdeleted = dispatch(deleteBookAction(_id));
      isdeleted && navigate("/books");
    }
  };

  const inputs = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "Enter Book Title",
      required: true,
      value: form.title,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Uncle Bob",
      required: true,
      value: form.author,
    },
    {
      label: "Year",
      name: "year",
      type: "number",

      placeholder: "",
      required: true,
      value: form.year,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "Uhttp://",
      required: false,
      value: form.thumbnail,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "book summary",
      required: false,
      value: form.summary,
    },
  ];

  return (
    <div>
      <UserLayout title="Books">
        {user?.role === "admin" ? (
          <>
            <h1>Edit Book</h1>
            <Link to="/books">
              <Button variant="secondary">&lt;Back</Button>
            </Link>
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((item, i) => (
                <CustomeInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <div className="d-flex">
                <Button variant="primary" type="submit">
                  Edit Book
                </Button>{" "}
              </div>
            </Form>

            <div className="text-end">
              <Button variant="danger" type="submit" onClick={handleOnDelete}>
                DeleteBook
              </Button>{" "}
            </div>
          </>
        ) : (
          <h1>Accees Not Granted for students</h1>
        )}
      </UserLayout>
    </div>
  );
};
