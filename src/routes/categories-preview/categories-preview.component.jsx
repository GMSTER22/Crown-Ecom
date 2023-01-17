
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { getCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {

  const categories = useSelector(getCategoriesMap);
  
  return (

    <>

      {

        categories && Object.keys(categories).map( title => {

          const products = categories[title];

          return <CategoryPreview key={title} title={title} products={products} />

        } )

      }

    </>

  )

}

export default CategoriesPreview;