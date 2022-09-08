import { ProductState, ProductAction, ProductActionType } from '../types/product';

const initialState: ProductState = {
  products: [],
};

export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
};
