import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import PrivateRoute from "./route/PrivateRoute";
import Category from "./page/Category";

function App() {
  let [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route path="/man" element={<Category gender={"man"} />} />
        <Route path="/woman" element={<Category gender={"woman"} />} />
        <Route path="/kids" element={<Category gender={"kids"} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
