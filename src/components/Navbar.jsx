import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartProduct = useSelector(state=> state.cart)

  return (
    <nav className="flex items-center justify-between p-4 shadow-md sticky top-0 left-0 bg-slate-50">
      <h1 className="text-2xl font-bold text-blue-600 font-serif">MyShop</h1>
      <Link to="/" className="font-bold text-slate-500 hover:text-slate-800">Products</Link>
      <Link to="cart" className="font-bold text-slate-500 hover:text-slate-800">My Cart-{ cartProduct.length}</Link>
    </nav>
  );
};

export default Navbar;
