import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import Modal from "../utility/Modal";

const Main = () => {
  const [modal, setModal] = useState({ status: false, error: "" });
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleCart = (item) => {
    const checkDuplicate = cart?.find((cartItem) => cartItem.id === item.id);

    if (checkDuplicate) {
      setModal({ status: true, error: "You cannot add same product twice" });
      return;
    }

    // console.log(checkDuplicate);
    if (cart.length > 3) {
      setModal({ status: true, error: "You Can't add more then 4 product" });
      return;
    }

    setCart((prevState) => [...prevState, item]);
  };

  const handleSelected = (item) => {
    setCart(item);
  };

  return (
    <main>
      {modal.status && (
        <Modal
          error={modal.error}
          close={() => setModal({ status: false, error: "" })}
        />
      )}

      <Container>
        <div className="text-center mb-5">
          <h1>Choose the Best Backpack</h1>
          <h4>
            You can add maximum 4 products to cart & Click choose button to
            choose the best
          </h4>
        </div>

        <Row>
          <Col sm md={7} lg={8}>
            <Products onCart={handleCart} />
          </Col>
          <Col sm md={5} lg={4}>
            <Cart handleSelected={handleSelected} items={cart} />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
