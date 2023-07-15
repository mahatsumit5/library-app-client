import { Button } from "react-bootstrap";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { BookTable } from "../../components/book-comp/Booktable";
import { Link } from "react-router-dom";
const Books = () => {
  const { user } = useSelector((state) => state.userInfo);
  return user?.role !== "admin" ? (
    <h1>Unauthorise Accesss</h1>
  ) : (
    <UserLayout title="Books">
      <div className="d-grid">
        <Link to="/book/new">
          <Button variant="primary">Add new Book</Button>
        </Link>
      </div>
      <div className="mt-3">
        <BookTable />
      </div>
    </UserLayout>
  );
};

export default Books;
