import { Dispatch } from 'redux';
import http from '../../http';
import { ProductAction, ProductActionType } from '../types/product';

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    const response = await http.get('products');
    dispatch({ type: ProductActionType.GET_PRODUCTS, payload: response.data.products });
  };
};
