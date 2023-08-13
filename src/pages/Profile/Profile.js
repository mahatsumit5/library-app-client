import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { uploadImgAction } from "../signup-signin/userAction";

export const Profile = () => {
  const dispatch = useDispatch();
  const [profile, setprofile] = useState();
  const handleOnChange = (e) => {
    const { name, files } = e.target;
    setprofile(files[0]);
  };
  const handleOnUpload = (e) => {
    e.preventDefault();
    const formdt = new FormData();
    formdt.append("profile", profile);

    dispatch(uploadImgAction(formdt));
  };
  const { user } = useSelector((store) => store.userInfo);
  console.log(user.profile);

  return (
    <div>
      <UserLayout title={user.role.toUpperCase()}>
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-picture">
              <img
                src={"http://localhost:8000/" + user.profile?.slice(6)}
                width="150px"
                alt="profile"
                height="200px"
              />
            </div>
            <div className="profile-details">
              {/* Display user's details */}
              <h2>
                {user.fName.toUpperCase()} {user.lName.toUpperCase()}
              </h2>
              <p>
                Email: <b>{user.email}</b>
              </p>
              <p>Address: {user.address}</p>
              {/* Add more details as needed */}
            </div>
            <div className="d-grid">
              <Link to={`/profile/edit/${user._id}`}>
                <Button>Edit</Button>
              </Link>
            </div>
            <div>
              <Form
                method="post"
                action="/upload"
                encType="multipart/form-data"
                onSubmit={handleOnUpload}
              >
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  size="lg"
                  name="profile"
                  onChange={handleOnChange}
                />
                <Button type="submit">Upload</Button>
              </Form>
            </div>
          </div>
        </div>
      </UserLayout>
    </div>
  );
};
