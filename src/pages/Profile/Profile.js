import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user } = useSelector((store) => store.userInfo);
  return (
    <div>
      <UserLayout title={user.role.toUpperCase()}>
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-picture">
              {/* Display user's profile picture */}
              <a href={user.profile}>{user.profile}</a>
              <img src={user.profile} width="150px" alt="profile" />
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
          </div>
        </div>
      </UserLayout>
    </div>
  );
};
