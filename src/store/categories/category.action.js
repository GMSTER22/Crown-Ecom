
import { createAction } from "../../utils/reducer/reducer.utils";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { CATEGORIES_ACTION_TYPE } from "./category.types";

export const fetchCategoriesStart = () => createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START );

export const fetchCategoriesSuccess = (categoriesArray) => createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray );

export const fetchCategoriesFailed = ( error ) => createAction( CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_Failed, error );

export const fetchCategoriesAsync = () => async ( dispatch ) => {

  dispatch( fetchCategoriesStart() );

  try {

    const categoriesArray = await getCategoriesAndDocuments();

    dispatch( fetchCategoriesSuccess( categoriesArray ) );

  } catch( error ) {

    dispatch( fetchCategoriesFailed( error ) );

  }

}