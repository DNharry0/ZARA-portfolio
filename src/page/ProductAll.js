import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import MainPhoto from "../component/MainPhoto";

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts = async () => {
    try {
      let keyword = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/DNharry0/zara-json/products?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다.");
        }
      }
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };
  //API호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <MainPhoto />

      <h1>Enjoy the NEW from new origins</h1>
      <h1>Now, The movie start</h1>

      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}

      <ReactPlayer
        className="video-section"
        playing={true}
        controls={true}
        muted={true}
        url="https://youtu.be/H4j2253FnE0"
      />
    </Container>
  );
};

export default ProductAll;
