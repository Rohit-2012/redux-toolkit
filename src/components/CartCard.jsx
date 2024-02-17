import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const CartCard = ({ product }) => {
    const dispatch = useDispatch()

    const removeItem = (id) => { 
        dispatch(remove(id))
    }
    
  return (
    <div className="border border-slate-400 w-72 sm:w-60 rounded-lg flex flex-col justify-between items-center gap-3 p-4 mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl"
      />
      <h1 className="text-center font-bold w-full">{product.title}</h1>
      <p className="text-sm flex items-center">
        ⭐{product.rating.rate}/5{" "}
        <span className="text-slate-500">({product.rating.count} reviews)</span>
      </p>
      <p className="text-teal-500 text-[18px] font-semibold">
        ₹ {product.price}
      </p>
      <button
        className="px-6 py-2 rounded-lg cursor-pointer bg-red-500 text-white"
        onClick={() => removeItem(product.id)}
      >
        Remove item
      </button>
    </div>
  );
};

export default CartCard;
