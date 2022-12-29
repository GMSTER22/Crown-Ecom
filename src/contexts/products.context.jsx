
import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../components/utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: []
});

export const ProductProvider = ( { children } ) => {

  const [products, setProducts] = useState( [] );

  const value = products;

  useEffect(() => {

    const getCategoriesMap = async () => {

      const categoryMap = await getCategoriesAndDocuments();

      setProducts(categoryMap['mens'])

    };

    getCategoriesMap();

  }, [])

  return (

    <ProductsContext.Provider value={ value }>
      
      { children }
      
    </ProductsContext.Provider>

  )

}