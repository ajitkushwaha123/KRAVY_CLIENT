import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Auth/Register/Register";
import ForgetPassword from "./Auth/ForgetPassword/ForgetPassword";
import PasswordLogin from "./Auth/Login/PasswordLogin";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<PasswordLogin />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
