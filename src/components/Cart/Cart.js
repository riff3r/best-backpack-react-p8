import React from "react";
import { Button, Card } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
      <Card border="light">
        <Card.Header>Selected Backpacks</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <br />
          <Button variant="outline-success">Choose One</Button>
          <br />
          <br />
          <Button variant="outline-danger">Reset Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
