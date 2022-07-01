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
      let url = `https://my-json-server.typicode.com/DNharry0/ZARA-json-fakeserver/products?q=${keyword}`;
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

      <h1>Enjoy the ZARA origins</h1>

      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <div>
          <Row id="1">
            {products.length > 0 &&
              products.filter(product => product.sex == "man").map((item) => (
                  <Col md={3} sm={12} key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))}
          </Row>
          <Row>
            {products.length > 0 &&
              products.filter(product => product.sex == "woman").map((item) => (
                  <Col md={3} sm={12} key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))}
          </Row>
          <Row>
            {products.length > 0 &&
              products.filter(product => product.sex == "kids").map((item) => (
                  <Col md={3} sm={12} key={item.id}>
                    <ProductCard item={item} />
                  </Col>
                ))}
          </Row>
 
        </div>
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
