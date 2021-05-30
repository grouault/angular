export enum ProductActionsTypes{
  "GET_ALL_PRODUCTS" = "[Product] Get All Products",
  "GET_SELECTED_PRODUCTS" = "[Product] Get Selected Products",
  "GET_AVAILABLE_PRODUCTS" = "[Product] Get Available Products",
  "SEARCH_PRODUCTS" = "[Product] Search Products",
  "NEW_PRODUCTS" = "[Product] New Products",
  "SELECT_PRODUCTS" = "[Product] Select Products",
  "EDIT_PRODUCTS" = "[Product] Edit Products",
  "DELETE_PRODUCTS" = "[Product] Delete Products"
}


/**
 * permet de qualifier l'event sur la nav-bar product
 * type
 * parametres : objet generique
 */
export interface ActionEvent{
  type: ProductActionsTypes,
  payload?: any
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

/**
 * creation d'un state de type generique
 */
export interface AppDataState<T>{
  dataState: DataStateEnum,
  data?: T,
  errorMessage?: string
}

