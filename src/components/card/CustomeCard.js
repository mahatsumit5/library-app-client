import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomeCard = ({ thumbnail, title, summary, year }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>
          {title}-{year}
        </Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
