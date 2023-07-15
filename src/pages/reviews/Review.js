import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Table, Form, Button } from "react-bootstrap";
import { deleteReviewAction, updateReviewAction } from "./reviewAction";
import { AiOutlineDelete } from "react-icons/ai";
export const Reviews = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((store) => store.reviewInfo);
  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    dispatch(
      updateReviewAction({
        _id: value,
        status: checked ? "active" : "inactive",
      })
    );
  };
  const handleOndelete = (_id) => {
    dispatch(deleteReviewAction(_id));
  };
  return (
    <div>
      <UserLayout title="reviews">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>status</th>
              <th>Book </th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    title="status"
                    value={r._id}
                    checked={r.status === "active"}
                    onChange={handleOnChange}
                  />{" "}
                  {r.status}
                </td>
                <td>
                  <h4> {r.bookName}</h4>
                  Reviewed By - {r.user}
                </td>
                <td>
                  <h3> {r.title}</h3>
                  <br></br>
                  {r.review}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOndelete(r._id)}
                  >
                    <AiOutlineDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </UserLayout>
    </div>
  );
};
