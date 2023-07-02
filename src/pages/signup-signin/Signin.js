import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import CustomeInput from "../../components/custome-input/CustomeInput";
import { BiSolidUserDetail } from "react-icons/bi";
import { useState } from "react";
import { signInAdminAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);
  const handldeOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(signInAdminAction(form));
  };
  const inputs = [
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
      placeholder: "*************",
      type: "text",
      minLength: "6",
    },
  ];
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1>
            <BiSolidUserDetail />
            Sign IN
          </h1>
          <hr></hr>
          {inputs.map((item, i) => (
            <CustomeInput key={i} {...item} onChange={handldeOnChange} />
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default Signin;
