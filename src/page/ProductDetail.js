import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Dropdown, Alert, Button } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/DNharry0/ZARA-json-server/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);

    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product == null) return <h1>Loading</h1>;
  return (
    <Container className="detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col className="detail-img">
            <img src={product.img} />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">
              {product?.price.toLocaleString()}원

            </div>

            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              장바구니
            </Button>
            <div className="note-section">
              <a href="#" className="note">소재, 세탁 방법 및 원산지</a>
              <a href="#" className="note">오프라인 매장에 재고 상태 보기</a>
              <a href="#" className="note">배송, 교환 및 반품</a>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
