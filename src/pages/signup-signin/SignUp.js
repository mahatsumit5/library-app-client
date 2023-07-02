import React, { useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import CustomeInput from "../../components/custome-input/CustomeInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postUser } from "../../helper/axios";
import { useSelector } from "react-redux";
const inputs = [
  {
    label: "First Name",
    name: "fName",
    required: true,
    placeholder: "Sam",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lName",
    required: true,
    placeholder: "Smith",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    required: true,
    placeholder: "Sam",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    required: true,
    placeholder: "Sam",
    type: "text",
    minLength: "6",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    required: true,
    placeholder: "******",
    type: "text",
    minLength: "6",
  },
  {
    label: "Phone",
    name: "phone",
    required: true,
    placeholder: "041562783",
    type: "tel",
  },
  {
    label: "Address",
    name: "address",
    required: true,
    placeholder: "222 george st, sydney",
    type: "text",
  },
];
const SignUp = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({
    role: "student",
  });

  const handldeOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== form.password) {
      return toast.error("Password do not match");
    }

    // call api and send rest obj

    const dataPromise = postUser(rest);

    toast.promise(dataPromise, {
      pending: "Please wait...",
    });

    const { status, message } = await dataPromise;
    toast[status](message);
  };
  return (
    <>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1>
            <BiSolidUserDetail />
            Add New Admin {user?.role === "admin" && "For Admin"}
          </h1>
          {user?.role === "admin" && (
            <Form.Group className="mb-3">
              <Form.Label>Select user type</Form.Label>
              <Form.Select onChange={handldeOnChange} required name="role">
                <option value="">--select--</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </Form.Select>
            </Form.Group>
          )}
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
      <Footer />
    </>
  );
};

export default SignUp;
