import axios from "axios";
export const fetchProducts = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get("http://localhost:3000/comments");
    dispatch({
      type: "products/FETCH_PRODUCTS",
      payload: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = (product: any) => async (dispatch: any) => {
  const { data } = await axios.post("http://localhost:3000/comments", product);

  dispatch({
    type: "products/ADD_PRODUCT",
    payload: data,
  });
};
export const updateProduct = (product: any) => async (dispatch: any) => {
  const { data } = await axios.put(
    "http://localhost:3000/comments/" + product.id,
    product
  );

  dispatch({
    type: "products/UPDATE_PRODUCT",
    payload: data,
  });
};
export const removeProduct = (id: any) => async (dispatch: any) => {
  await axios.delete("http://localhost:3000/comments/" + id);

  dispatch({
    type: "products/REMOVE_PRODUCT",
    payload: id,
  });
};
