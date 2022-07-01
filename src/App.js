import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import PrivateRoute from "./route/PrivateRoute";
import Man from "./page/Man";
import Woman from "./page/Woman";
import Kids from "./page/Kids";

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
        <Route
          path="/man" element={<Man />} />
        <Route
          path="/woman" element={<Woman />} />
        <Route
          path="/kids" element={<Kids />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
