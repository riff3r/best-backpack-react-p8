import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = ({ onCart }) => {
  console.log(onCart);
  const [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Row className="g-3">
      {products.map((product) => (
        <Product onCart={onCart} key={product.id} item={product} />
      ))}
    </Row>
  );
};

export default Products;
