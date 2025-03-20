import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 bg-opacity-80 backdrop-blur-lg text-white p-4 flex justify-between items-center shadow-md z-50">
      <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-gray-200 transition">
        🛍️ <span className="text-yellow-300">ShopEase</span>
      </Link>
      <div className="relative">
        <Link 
          to="/cart" 
          className="text-lg flex items-center bg-white text-blue-700 px-5 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition-all"
        >
          🛒 Cart 
          <span className="ml-2 bg-red-500 text-white px-3 py-1 text-sm rounded-full shadow-md">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
