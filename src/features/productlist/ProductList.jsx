import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, selectCartItems } from "../cart/cartSlice.js";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  console.log(cartItem);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      // handle error dengan menggunakan try&catch
      // fatching menggunakan fetch dan jangan lupa hasil dari fetch ubah ke json
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleClickBy = (products) => {
    dispatch(addItemToCart(products));
  };

  return (
    <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-4">
      {product.map((products) => {
        return (
          <div key={products.id} className="bg-white rounded-xl border shadow p-4 w-full">
            <div className="group relative w-[80%] h-[250px] mx-auto overflow-hidden">
              <img src={products.image} alt={products.title} className="w-full h-full object-contain group-hover:scale-110 transition-scale duration-500 ease-in-out" />
            </div>
            <div className="flex flex-col gap-6 mt-8">
              <button type="button" onClick={() => handleClickBy(products)} className="bg-blue-700 text-white hover:bg-blue-800 rounded-lg text-sm py-3 px-8">
                Buy Now
              </button>
              <h3 className="font-bold">{products.title}</h3>
              <h3>{products.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
