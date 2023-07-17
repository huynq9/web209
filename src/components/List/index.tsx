import ProductContext from "@/context/Products";
import { useContext, useEffect } from "react";
import axios from "axios";
const List = () => {
  const { state, dispatch } = useContext(ProductContext) as any;
  console.log(state);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");
        console.log(data);

        dispatch({ type: "FETCH_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      } finally {
        <h1>ok</h1>;
      }
    };
    fetchProducts();
  }, []);
  const addProduct = async (product: any) => {
    const { data } = await axios.post("http://localhost:3000/posts", product);

    dispatch({ type: "ADD_PRODUCT", payload: data });
  };
  const updateProduct = async (product: any) => {
    const { data } = await axios.put(
      "http://localhost:3000/posts/" + product.id,
      product
    );

    dispatch({ type: "UPDATE_PRODUCT", payload: data });
  };
  const removeProduct = async (id: any) => {
    await axios.delete("http://localhost:3000/posts/" + id);

    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };
  const randomNumber = Math.floor(Math.random() * state.products.length + 1);
  function randomString(length: any) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      const randomChar = characters.charAt(randomIndex);
      result += randomChar;
    }

    return result;
  }

  // Gọi hàm để tạo chuỗi ngẫu nhiên có độ dài 8
  const randomStr = randomString(4);
  return (
    <div>
      <h1>List</h1>
      {state?.products.map((item: any) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        );
      })}
      <button
        className="border bg-blue-500 p-2"
        onClick={() => addProduct({ title: randomStr })}
      >
        Add Product
      </button>
      <button
        className="border bg-blue-500 p-2"
        onClick={() => updateProduct({ title: randomStr, id: 27 })}
      >
        update Product
      </button>
      <button
        className="border bg-blue-500 p-2"
        onClick={() => removeProduct(randomNumber)}
      >
        remove Product
      </button>
    </div>
  );
};

export default List;
