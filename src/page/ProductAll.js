import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import MainPhoto from "../component/MainPhoto";
import Category from "./Category";

const ProductAll = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [error, setError] = useState("");

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
          <Category gender={"man"} />
          <Category gender={"woman"} />
          <Category id="1" gender={"kids"} />
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
