import { IProduct } from "../../components/Products/IProduct";


export interface ProductState {
  products: IProduct[];
}

export enum ProductActionType {
  GET_PRODUCTS = 'GET_PRODUCTS'
}

interface GetProductAction {
  type: ProductActionType.GET_PRODUCTS;
  payload: IProduct[];
}

export type ProductAction = GetProductAction;
