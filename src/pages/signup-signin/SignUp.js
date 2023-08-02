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
import { CustomToggleButton } from "../../components/Toggle/ToggleButton";

const SignUp = () => {
  const [inputType, setInputType] = useState("password");
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
      type: inputType,
      minLength: "6",
      className: "input",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: inputType,
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
    {
      label: "Profile Pic",
      name: "profile",
      required: false,
      placeholder: ":http://www.google.com",
      type: "url",
    },
  ];
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
      <section className="main d-flex flex-column justify-content-center align-items-center ">
        <div className="parent">
          <Form className="" onSubmit={handleOnSubmit}>
            <h2>
              <BiSolidUserDetail />
              Sign Up{user?.role === "admin" && "For Admin"}
            </h2>
            <hr></hr>
            {user?.role === "admin" && (
              <Form.Group className="mb-3 ">
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
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </div>
            <CustomToggleButton setInputType={setInputType} />
          </Form>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-100"
        >
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,160L6.2,170.7C12.3,181,25,203,37,176C49.2,149,62,75,74,74.7C86.2,75,98,149,111,176C123.1,203,135,181,148,176C160,171,172,181,185,181.3C196.9,181,209,171,222,176C233.8,181,246,203,258,208C270.8,213,283,203,295,170.7C307.7,139,320,85,332,69.3C344.6,53,357,75,369,85.3C381.5,96,394,96,406,112C418.5,128,431,160,443,165.3C455.4,171,468,149,480,149.3C492.3,149,505,171,517,176C529.2,181,542,171,554,149.3C566.2,128,578,96,591,69.3C603.1,43,615,21,628,16C640,11,652,21,665,53.3C676.9,85,689,139,702,181.3C713.8,224,726,256,738,250.7C750.8,245,763,203,775,197.3C787.7,192,800,224,812,240C824.6,256,837,256,849,245.3C861.5,235,874,213,886,224C898.5,235,911,277,923,277.3C935.4,277,948,235,960,202.7C972.3,171,985,149,997,165.3C1009.2,181,1022,235,1034,245.3C1046.2,256,1058,224,1071,208C1083.1,192,1095,192,1108,213.3C1120,235,1132,277,1145,288C1156.9,299,1169,277,1182,229.3C1193.8,181,1206,107,1218,112C1230.8,117,1243,203,1255,245.3C1267.7,288,1280,288,1292,282.7C1304.6,277,1317,267,1329,261.3C1341.5,256,1354,256,1366,240C1378.5,224,1391,192,1403,181.3C1415.4,171,1428,181,1434,186.7L1440,192L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"
          ></path>
        </svg>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
