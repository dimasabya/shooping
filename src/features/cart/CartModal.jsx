import Modal from "../../components/Modal.jsx";
import { useSelector } from "react";
import { selectCartItems } from "./cartSlice.js";

const CartModal = () => {
  const cartItem = useSelector(selectCartItems);

  return (
    <Modal>
      <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
            {cartItem.map((poduct) =>{
                return(
                    <div key={product.id} className="w-full border-b-4 border-blue-200 pb-2">
                        <div className="w-[120px]"></div>
                    </div>
                )
            })}
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
