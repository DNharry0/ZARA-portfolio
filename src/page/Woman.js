import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const Woman = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/DNharry0/ZARA-json-fakeserver/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  //API호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {products.length > 0 &&
          products.filter(product => product.sex == "woman").map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default Woman;
