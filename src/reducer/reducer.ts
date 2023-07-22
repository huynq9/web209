/* eslint-disable no-case-declarations */
import { produce } from "immer";
const initialState = {
  products: [],
};
export const productsReducer = (state: any = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case "products/FETCH_PRODUCTS":
        draftState.products = action.payload;
        return;
      case "products/ADD_PRODUCT":
        draftState.products.push(action.payload);
        return;
      case "products/REMOVE_PRODUCT":
        const id = action.payload;
        draftState.products = draftState.products.filter(
          (item: any) => item.id !== id
        );
        return;
      case "products/UPDATE_PRODUCT":
        const product = action.payload;
        draftState.products = draftState.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        return;
      default:
        return state;
    }
  });
};
