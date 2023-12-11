import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import { useState } from "react";
import CartModal from "./features/cart/CartModal";

function App() {
  const [isOPenModalCart, setIsOPenModalCart] = useState(false);

  const handleOpenModal = () => {
    setIsOPenModalCart(true);
  };
  const handleHideModal = () => {
    setIsOPenModalCart(false);
  };
  return (
    <>
      {isOPenModalCart ? <CartModal handleHideModal={handleHideModal} /> : null}
      <Header handleOpenModal={handleOpenModal} />
      <main className="max-w-7xl mx-auto px-4">
        <ProductList />
      </main>
    </>
  );
}

export default App;
