
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { getCategoriesMap, getCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';

import Spinner from '../../components/spinner/spinner.component';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {

  const { category } = useParams();

  const categories = useSelector(getCategoriesMap);

  const isLoading = useSelector(getCategoriesIsLoading);
  
  const [ products, setProducts ] = useState(categories[ category ]);

  useEffect(() => {

    setProducts(categories[ category ]);

  }, [category, categories]);

  return (

    <>

      <CategoryTitle>{ category.toUpperCase() }</CategoryTitle>

      {

        isLoading ? ( 
        
          <Spinner/> 
          
        ) : (

          <CategoryContainer>

            {
              
              products && products.map( product => <ProductCard key={ product.id } product={ product } />)

            }

          </CategoryContainer>

        )

      }

    </>

  )

}

export default Category;