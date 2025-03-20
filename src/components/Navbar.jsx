import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-extrabold tracking-wide">
        🛍️ ShopEase
      </Link>
      <div className="relative">
        <Link 
          to="/cart" 
          className="text-lg flex items-center bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all"
        >
          🛒 Cart 
          <span className="ml-2 bg-red-500 text-white px-2 py-1 text-sm rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
