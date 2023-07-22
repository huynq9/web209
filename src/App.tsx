import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import { Dispatch, useEffect } from "react";
import {
  addProduct,
  fetchProducts,
  updateProduct,
  removeProduct,
} from "./actions/products";

function App() {
  const { products } = useSelector((state: any) => state.products);
  const dispatch: Dispatch<any> = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {products.map((product: any) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
      <button
        className="border bg-blue-500 p-2"
        onClick={() => dispatch(addProduct({ title: "Huy", id: 3 }))}
      >
        Add Product
      </button>
      <button
        className="border bg-blue-500 p-2"
        onClick={() => dispatch(updateProduct({ title: "hello", id: 3 }))}
      >
        update Product
      </button>
      <button
        className="border bg-blue-500 p-2"
        onClick={() => dispatch(removeProduct(3))}
      >
        remove Product
      </button>
    </>
  );
}
//closure currying
export default App;
