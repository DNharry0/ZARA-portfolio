import React from "react";
import { Container } from "react-bootstrap";
import { BsTwitter, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

const Footer = () => {
  const footerList1 = [
    <BsInstagram />,
    <BsFacebook />,
    <BsYoutube />,
    <BsTwitter />,
    <RiKakaoTalkFill />,
  ];

  const footerList2 = [
    "상호명: 아이티엑스코리아 유한회사",
    "사업자등록번호: 120-88-14733",
    "대표자: ROMAY DE LA COLINA JOSE MANUEL",
    "주소: 서울시 강남구 영동대로 511",
    "대표번호: 080-479-0880",
    "개인정보처리방침",
  ];

  return (
    <div>
      <Container className="footer-section">
        <h3></h3>
        <h4>Please Subscribe ZARA Newsletter</h4>
        <div className="footer-section1">
          {footerList1.map((footer1) => (
            <li>{footer1}</li>
          ))}
        </div>

        <div className="footer-section2">
          {footerList2.map((footer2) => (
            <li>{footer2}</li>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
