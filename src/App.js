import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const user = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {user ? (
            <Route path="/login" element={<Navigate replace to="/" />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          {user ? (
            <Route path="/register" element={<Navigate replace to="/" />} />
          ) : (
            <Route path="/register" element={<Register />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
