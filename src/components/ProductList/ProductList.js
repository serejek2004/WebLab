import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ListContainer } from './ProductList.styled';
import ItemCard from '../itemCard/itemCard';
import LoadingPage from '../loading/loading';
import { getDrones } from '../../fetching';

const ProductList = ({ filter }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const { searchQuery, selectedCategory, sortByPrice } = filter;
          const response = await getDrones(searchQuery, selectedCategory, sortByPrice);
          setProducts(response.data.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }, 100);
    };
    fetchData();
  }, [filter]);

  if (products == null || products === undefined) {
    return;
  }

  const filteredProducts = products;
  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  return (
    <ListContainer>
      {loading ? (
        <LoadingPage/>
      ) : (
      filteredProducts.map((product, index) => (
        <ProductCard key={index}
          product={product}
          onViewMore={() => handleViewMore(product)}
        />
      )))}
      {isModalOpen && selectedProduct && typeof selectedProduct === 'object' && (
        <ItemCard
          product={selectedProduct}
        />
      )}
    </ListContainer>
  );
};

export default ProductList;