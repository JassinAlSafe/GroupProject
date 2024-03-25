import "../styles/Menu.css";
import Products from "../components/Products";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="menu">
      <div className="cart-container">
        <div className="nav-container">
          <img className="nav" src="src/assets/navicon.svg" alt="" />
        </div>
        <div className="cart">
          <p className="cart-length">{cartItems.length}</p>
          <Link to="/cart"></Link>
        </div>
      </div>
      <h1 className="menu-title">Meny</h1>
      <div>
        <Products />
      </div>
    </div>
  );
}
