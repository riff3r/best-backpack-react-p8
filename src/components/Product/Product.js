import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Button } from "react-bootstrap";

const Product = (props) => {
  const { name, price, image } = props.item;
  const { onCart } = props;

  const addToCartHandler = (item) => {
    console.log(item);
    onCart(item);
  };
  return (
    <Col md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Price: {price} Tk</strong>
          </Card.Text>
          <Button variant="dark" onClick={() => addToCartHandler(props.item)}>
            Add To Cart {<FontAwesomeIcon icon={faShoppingCart} />}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
