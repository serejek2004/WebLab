import React from "react";
import { Link } from 'react-router-dom';
import { CardContainer, ProductName, ProductCategory, ProductDescription, ProductPrice, Image, ViewMoreBut } from './ProductCard.styled'

const ProductCard = ({ product, onViewMore }) => {
    const handleViewMoreClick = () => {
        onViewMore(product);
    };

    return (
      <CardContainer>
        <Image src={product.image} alt='fail' />
        <ProductName>{product.title}</ProductName>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>Price: {product.price}</ProductPrice>
        <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
        <ViewMoreBut onClick={handleViewMoreClick}>
          View More
        </ViewMoreBut>
      </Link>
      </CardContainer>
    );
  };

export default ProductCard;