import { createContext, useState } from "react";

const ProductContext = createContext([]);

const ProductProvider = ({ children }: any) => {
  const [product, setProduct] = useState<any>([{ id: 1, name: "Product" }]);
  return (
    <>
      <ProductContext.Provider value={{ product, setProduct } as any}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContext;

export { ProductProvider };
