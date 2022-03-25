import { Card, Col, Button } from "react-bootstrap";

const Product = (props) => {
  console.log(props);
  const { name, price, image } = props.item;
  console.log(image, price);
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
