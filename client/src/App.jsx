import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./Auth/Register/Register";
import ForgetPassword from "./Auth/ForgetPassword/ForgetPassword";
import PasswordLogin from "./Auth/Login/PasswordLogin";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart/Cart";
import SingleProduct from "./Pages/Product/SingleProduct";
import Splash from "./Pages/Splash/Splash";
import { useEffect, useState } from "react";
import OnboardingScreen from "./Pages/Onboarding/OnboardingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<PasswordLogin />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="/" element={loading ? <Splash /> : <Home />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
