import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './itemCard';

const ProductModalPage = ({ products }) => {
  const { productId } = useParams();
  const selectedProduct = products.find(product => product.id.toString() === productId);

  return (
    <div>
      {selectedProduct && <ItemCard product={selectedProduct} />}
    </div>
  );
};

export default ProductModalPage;