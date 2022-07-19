import React from "react";
import { Link } from "react-scroll";

const MainPhoto = () => {
  return (
    <div className="mainphoto-section">
      <Link to="1">
        <img
          className="mainphoto"
          src="https://static.zara.net/photos///2022/V/M/1/p/0000/003/538/2/w/942/0000003538_15_2_1.jpg?ts=1655198679625"
        />
      </Link>
    </div>
  );
};

export default MainPhoto;
