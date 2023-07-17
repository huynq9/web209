import { createContext, useReducer } from "react";
import { produce } from "immer";
import { rootReducer } from "../reducer/reducer";

const ProductContext = createContext([]);
const initialState = {
  products: [],
};
const ProductProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(produce(rootReducer), initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch } as any}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
export default ProductContext;
