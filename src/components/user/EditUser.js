import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import CustomeInput from "../../components/custome-input/CustomeInput";
import { BiSolidUserDetail } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "../../pages/signup-signin/userAction";
export const EditUser = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    setForm(user);
  }, [_id, user]);
  const handldeOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(form));
    navigate(-1);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Sam",
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "Smith",
      type: "text",
      value: form.lName,
    },

    {
      label: "Phone",
      name: "phone",
      required: true,
      placeholder: "041562783",
      type: "tel",
      value: form.phone,
    },
    {
      label: "Address",
      name: "address",
      required: true,
      placeholder: "222 george st, sydney",
      type: "text",
      value: form.address,
    },
    {
      label: "Add Profile Picture",
      name: "picture",
      required: false,
      placeholder: "http://",
      type: "url",
      // value: form.profile,
    },
  ];

  return (
    <UserLayout>
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1>
            <BiSolidUserDetail />
            Edit Your Profile
          </h1>

          {inputs.map((item, i) => (
            <CustomeInput key={i} {...item} onChange={handldeOnChange} />
          ))}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
    </UserLayout>
  );
};
