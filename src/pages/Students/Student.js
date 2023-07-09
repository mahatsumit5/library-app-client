import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

export const Student = () => {
  const { studentList } = useSelector((store) => store.studentListInfo);
  console.log(studentList);
  return (
    <div>
      <UserLayout title="List of students found">
        <Table striped responsive>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, i) => (
              <tr key={i}>
                <td>{student.fName.toUpperCase()}</td>
                <td>{student.lName.toUpperCase()}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </UserLayout>
    </div>
  );
};
