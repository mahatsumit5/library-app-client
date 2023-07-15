import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomeCard = ({ thumbnail, title, author, year }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}-{year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
