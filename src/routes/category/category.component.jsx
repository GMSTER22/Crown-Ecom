
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryTitle } from './category.styles';

import { getCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {

  const { category } = useParams();

  const categories = useSelector(getCategoriesMap);
  
  const [ products, setProducts ] = useState(categories[ category ]);

  useEffect(() => {

    setProducts(categories[ category ]);

  }, [category, categories]);

  return (

    <>

      <CategoryTitle>{ category.toUpperCase() }</CategoryTitle>

      <CategoryContainer>

        {
          
          products && products.map( product => <ProductCard key={ product.id } product={ product } />)

        }

      </CategoryContainer>

    </>

  )

}

export default Category;