import { useContext } from "react";
import ProductContext from "../../context/Products";
const ListContext = () => {
  const { product } = useContext(ProductContext) as any;
  console.log(product);

  return <div></div>;
};

export default ListContext;
