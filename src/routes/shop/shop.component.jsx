
import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {

  const products = useContext( ProductsContext );
  console.log(products, "products in shop")
  return (

    <div className="products-container">

      {
        products.map(( product, index) => (
          <ProductCard key={index} product={product} />
        ) ) 
      }

    </div>

  )

}

export default Shop;