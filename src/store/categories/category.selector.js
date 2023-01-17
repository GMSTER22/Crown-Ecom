
import { createSelector } from "reselect";

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  ( categoriesSlice ) => categoriesSlice.categories
);

export const getCategoriesMap = createSelector([selectCategoryReducer], (selectCategoryReducer) => selectCategoryReducer.categories

  .reduce( (acc, category) => {

    const { title, items } = category;

    acc[ title.toLowerCase() ] = items;

    return acc;

  }, {} )
  
);