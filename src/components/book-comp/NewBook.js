import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomeInput from "../custome-input/CustomeInput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { postBookAction } from "../../pages/Books/bookAction";
import { useNavigate } from "react-router-dom";

export const NewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(postBookAction(form));
    console.log(form);
    navigate("/book");
  };

  const inputs = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "Enter Book Title",
      required: true,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Uncle Bob",
      required: true,
    },
    {
      label: "Year",
      name: "year",
      type: "number",

      placeholder: "",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "Uhttp://",
      required: false,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "book summary",
      required: false,
    },
  ];
  return (
    <div>
      <UserLayout title="Books">
        {user?.role === "admin" ? (
          <>
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((item, i) => (
                <CustomeInput key={i} {...item} onChange={handleOnChange} />
              ))}
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Add Book
                </Button>{" "}
              </div>
            </Form>
          </>
        ) : (
          <h1>Accees Not Granted for students</h1>
        )}
      </UserLayout>
    </div>
  );
};
