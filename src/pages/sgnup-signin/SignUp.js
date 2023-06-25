import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import CustomeInput from "../../components/layout/custome-input/CustomeInput";

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
    name: "Email",
    required: true,
    placeholder: "Sam",
    type: "text",
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
    required: "true",
    placeholder: "222 george st, sydney",
    type: "text",
  },
];
const SignUp = () => {
  const [form, setForm] = useState({});

  const handldeOnChange = (e) => {
    const { name, value } = e.target;
    setForm();

    console.log(form);
  };
  return (
    <>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg">
          <h1> Add New Admin</h1>
          {inputs.map((item, i) => (
            <CustomeInput key={i} {...item} />
          ))}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
