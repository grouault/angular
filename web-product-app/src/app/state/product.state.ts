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

