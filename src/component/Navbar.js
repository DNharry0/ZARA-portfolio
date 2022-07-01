import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { MdPerson, MdPersonOutline, MdSearch } from "react-icons/md";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
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

  const menuList =
    [
    <Link to="/man" className="mwk">
      Man
    </Link>,
    <Link to="/woman" className="mwk">
      Woman
    </Link>,
    <Link to="/kids" className="mwk">
      kids
    </Link>
  ];

  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  return (
    <div className="header">
      <div className="title">ZARA 커뮤니티에 가입해 최신소식을 받아보세요</div>

      <div className="header-left">
        <div className="side-btn">
          {open ? closeIcon : hamburgericon}
          <div className="side-menu">
            {open && menuList.map((menu) => <div>{menu}</div>)}
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
