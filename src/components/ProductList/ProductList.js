import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ListContainer } from './ProductList.styled';
import ItemCard from '../itemCard/itemCard';

const ProductList = ({ products, filter }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterProducts = () => {
    const { searchQuery, selectedCategory, sortByPrice } = filter;
  
    let filteredProducts = [...products];
  
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  
    if (sortByPrice === 'asc') {
      filteredProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } 
    if (sortByPrice === 'desc') {
      filteredProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
  
    return filteredProducts;
  };
  
  const filteredProducts = filterProducts();
  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  return (
    <ListContainer>
      {filteredProducts.map((product, index) => (
        <ProductCard key={index}
          product={product}
          onViewMore={() => handleViewMore(product)}
        />
      ))}
      {isModalOpen && selectedProduct && typeof selectedProduct === 'object' && (
        <ItemCard
          product={selectedProduct}
        />
      )}
    </ListContainer>
  );
};

export default ProductList;