import React from "react";
import { Form } from "react-bootstrap";
const CustomeInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export default CustomeInput;
