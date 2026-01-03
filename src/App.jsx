import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Components from "./pages/Components";

import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/components" element={<Components />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
