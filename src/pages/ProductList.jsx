import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log("API Response:", res.data); 
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("API did not return an array:", res.data);
        }
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {loading ? (
        [...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 rounded-lg p-4">
            <div className="w-full h-48 bg-gray-300 rounded-md"></div>
            <div className="h-6 bg-gray-400 rounded mt-4 w-3/4"></div>
            <div className="h-4 bg-gray-400 rounded mt-2 w-1/2"></div>
          </div>
        ))
      ) : (
        products.slice(0, 30).map((product) => ( 
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
