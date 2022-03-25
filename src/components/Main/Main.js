import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Main = () => {
  return (
    <main>
      <Container>
        <div className="text-center mb-5">
          <h1>Choose the Best Backpack</h1>
          <h4>
            You can add maximum 4 products to cart & Click choose button to
            choose the best
          </h4>
        </div>

        <Row>
          <Col sm md={7} lg={9}>
            <Products />
          </Col>
          <Col sm md={5} lg={3}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
