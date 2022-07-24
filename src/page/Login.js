import React from "react";
import { useNavigate } from "react-router-dom";

//boot strap

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const login = event => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={login}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">로그인</h3>
          <div className="form-group mt-3">
            <label>이메일</label>
            <input type="email" className="form-control mt-1" />
          </div>
          <div className="form-group mt-3">
            <label>비밀번호</label>
            <input type="password" className="form-control mt-1" />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              로그인
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            <a href="#">비밀번호를 잊으셨습니까?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
