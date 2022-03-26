import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Cart = ({ items, handleSelected }) => {
  const [isSelected, setIsSelected] = useState(true);

  console.log(items.length);

  const chooseHandler = () => {
    if (!items.length) return;
    console.log(items[Math.floor(Math.random() * items.length)]);
    handleSelected([items[Math.floor(Math.random() * items.length)]]);
    setIsSelected(false);
  };

  const resetCart = () => {
    handleSelected([]);
    setIsSelected(true);
  };
  return (
    <div>
      <Card border="light">
        <Card.Header>Selected Backpacks</Card.Header>
        <Card.Body>
          {items?.map((product) => (
            <Card.Title
              className="d-flex justify-content-between align-items-center"
              key={product.id}
            >
              {product.name} <FontAwesomeIcon icon={faTrashCan} />{" "}
            </Card.Title>
          ))}

          <br />
          {isSelected && (
            <Button onClick={() => chooseHandler()} variant="outline-success">
              Choose One
            </Button>
          )}

          <br />
          <br />
          <Button onClick={() => resetCart()} variant="outline-danger">
            Reset Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
