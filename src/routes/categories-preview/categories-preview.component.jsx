
import { useSelector } from 'react-redux';

import { getCategoriesMap, getCategoriesIsLoading } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {

  const categories = useSelector( getCategoriesMap );

  const isLoading = useSelector( getCategoriesIsLoading );
  
  return (

    <>

      {
       
        isLoading ? (

          <Spinner />

        ) : (

          categories && Object.keys(categories).map( title => {
  
            const products = categories[title];
  
            return <CategoryPreview key={title} title={title} products={products} />
  
          } )

        )

      }

    </>

  )

}

export default CategoriesPreview;
