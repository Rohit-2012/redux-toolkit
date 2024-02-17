import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

const Product = () => {
  const products = useSelector(state=> state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (
    <div className="w-full flex flex-col p-4">
      <h1 className="text-center mb-4 text-3xl font-bold">Product Dashboard</h1>
      {products.loading && <h1 className="text-center my-4 text-5xl font-bold text-blue-500">Loading...</h1>}
      <div className="grid grid-cols-1 place-content-center sm:grid-cols-5  gap-5">
        {
          products.data.map(product => {
            return <Card key={product.id} product={product} />;
          })
        }
      </div>
    </div>
  );
};

export default Product;
