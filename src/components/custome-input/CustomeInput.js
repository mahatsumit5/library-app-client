import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { CustomToggleButton } from "../Toggle/ToggleButton";
const CustomeInput = ({ label, ...rest }) => {
  console.log(rest);
  return (
    <Form.Group className={rest.className}>
      <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3 floatingInput"
      >
        <Form.Control {...rest} />
      </FloatingLabel>
    </Form.Group>
  );
};

export default CustomeInput;
