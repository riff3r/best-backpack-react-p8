import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Cart = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Card border="light">
        <Card.Header>Selected Backpacks</Card.Header>
        <Card.Body>
          {items.map((product) => (
            <Card.Title
              className="d-flex justify-content-between align-items-center"
              key={product.id}
            >
              {product.name} <FontAwesomeIcon icon={faTrashCan} />{" "}
            </Card.Title>
          ))}

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
