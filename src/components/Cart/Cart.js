import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Cart = ({ items, handleSelected }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    items.length <= 1 ? setIsSelected(false) : setIsSelected(true);
  }, [items]);

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
              className="d-flex justify-content-between align-items-center mb-3"
              key={product.id}
            >
              <img width={30} src={product.image} alt="" /> {product.name}{" "}
              <FontAwesomeIcon icon={faTrashCan} />{" "}
            </Card.Title>
          ))}

          {isSelected && (
            <Button
              className="d-block my-3"
              onClick={() => chooseHandler()}
              variant="outline-success"
            >
              Choose One
            </Button>
          )}

          <Button
            className="d-block my-3"
            onClick={() => resetCart()}
            variant="outline-danger"
          >
            Reset Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
