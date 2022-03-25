import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Main = () => {
  return (
    <main>
      <Container>
        <div className="text-center mb-4">
          <h1>Choose the Best Backpack</h1>
          <h3>
            You can choose maximum 4 product and choose button will provide you
            best one
          </h3>
        </div>

        <Row>
          <Col sm={8}>
            <Products />
          </Col>
          <Col sm={4}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
