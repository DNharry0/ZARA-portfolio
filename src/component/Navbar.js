import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { MdPerson, MdPersonOutline, MdSearch } from "react-icons/md";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
//메인페이지부터 공통으로 나오는 부분
//로그인 누르면 넘어가도록 설정

const Navbar = ({ authenticate, setAuthenticate }) => {

  const [open, setOpen] = useState(false);

  const hamburgericon = (
    <FontAwesomeIcon
      className="bar"
      icon={faBars}
      fontSize={24}
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FontAwesomeIcon
      className="X"
      icon={faX}
      fontSize={24}
      onClick={() => setOpen(!open)}
    />
  );

  const menuList = ["남성", "여성", "어린이"];
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };


// const getProducts = async () => {
//   let url = `https://my-json-server.typicode.com/DNharry0/ZARA-json-server/products?q=${""}`;
//   let response = await fetch(url);
//   let data = await response.json();
//   setProducts(data);
//   }


// const pic = [menuList].filter((products) => products.id < 8);

  return (
    <div className="header">
      <div className="title">ZARA 커뮤니티에 가입해 최신소식을 받아보세요</div>

      <div className="header-left">
        <div className="side-btn">
          {open ? closeIcon : hamburgericon}
          <div className="side-menu">
            {open && menuList.map((menu) => <li>{menu}</li>)}
          </div>
        </div>

        <div className="logo-section">
          <Link to="/">
            <img
            
              width={160}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png"
            />
          </Link>
        </div>
      </div>

      <ul className="header-right">
        <li className="search-section">
          <div className="search-box">
            <MdSearch size={30} />
            <input type="text" onKeyPress={onCheckEnter} />
          </div>
        </li>

        {authenticate ? (
          <li onClick={() => setAuthenticate(false)}>
            <MdPerson size={30} />
            <span className="log-out"> 로그아웃</span>
          </li>
        ) : (
          <li onClick={() => navigate("/login")}>
            <MdPersonOutline size={30} />
            <span className="log-In"> 로그인 해주세요</span>
          </li>
        )}

        <li>
          <BsCartFill size={23} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
