import { UserLayout } from "../../components/layout/UserLayout";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchBurrowAction, updateBurrowAction } from "./burrowAction";
import { useEffect, useState } from "react";
import { CustomModal } from "../../components/modal/CustomModal";
import { Review } from "../../components/review/ReviewForm";
import { setModalShow } from "../../systemSlice";

export const BurrowHistory = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { _id } = useSelector((state) => state.userInfo.user);
  const [selectedReview, setSelectedReview] = useState({});
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch, _id]);

  const handleOnReturn = (burrowObj) => {
    dispatch(updateBurrowAction(burrowObj));
  };
  const handleOnReview = (book) => {
    dispatch(setModalShow(true));
    setSelectedReview(book);
  };
  return (
    <UserLayout title="Burrow History">
      <CustomModal moddalTitle="Enter your Review">
        <Review book={selectedReview} />
      </CustomModal>
      <div className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Thumnbnail</th>
              <th>BookName</th>
              <th>Due Date</th>
              <th>Burrowed By</th>
              <th>IsReturned</th>
              <th>Returned Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {burrows?.map((item, i) => (
              <tr key={item._id}>
                <td>
                  <img src={item.thumbnail} width="150px" alt="image" />
                </td>
                <td width={10}>
                  <h2>{item.bookName}</h2>
                </td>
                <td>{item.dueDate?.slice(0, 10)}</td>
                <td>{item.userName.toUpperCase()}</td>
                <td>{item.isReturned.toString().toUpperCase()}</td>
                <td>{item.returnedDate}</td>

                {!item.isReturned && item.userId === _id ? (
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleOnReturn(item)}
                    >
                      Return
                    </Button>
                  </td>
                ) : (
                  <></>
                )}

                {item.userId === _id ? (
                  <td>
                    <Button
                      variant="success"
                      onClick={() => handleOnReview(item)}
                    >
                      Review
                    </Button>
                  </td>
                ) : (
                  <></>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
