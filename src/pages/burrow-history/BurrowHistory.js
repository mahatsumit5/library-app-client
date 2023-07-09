import { UserLayout } from "../../components/layout/UserLayout";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { fetchBurrowAction, updateBurrowAction } from "./burrowAction";
import { useEffect } from "react";

export const BurrowHistory = () => {
  const dispatch = useDispatch();
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { _id } = useSelector((state) => state.userInfo.user);

  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch, _id]);
  const handleOnReturn = (burrowObj) => {
    dispatch(updateBurrowAction(burrowObj));
  };
  return (
    <UserLayout title="Burrow History">
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
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
