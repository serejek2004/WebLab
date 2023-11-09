import React from "react";
import Filter from "../filters/filter";
import { CatalogStyle, CardContainer, ProductName, ProductCategory, ProductDescription, ProductPrice, Image, ViewMoreBut, ListContainer } from './catalog.styled'

const ProductCard = ({ product }) => {
    return (
      <CardContainer>
        <Image src={product.image} alt='fail' />
        <ProductName>{product.title}</ProductName>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>Price: {product.price}</ProductPrice>
        <ViewMoreBut>Buy</ViewMoreBut>
      </CardContainer>
    );
  };

const ProductList = ({ products }) => {
    return (
      <ListContainer>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ListContainer>
    );
  };

  const Catalog = ({ products }) => {
    return (
        <CatalogStyle>
            <Filter/>
                <ProductList products={products} />
        </CatalogStyle>
    );
};

export default Catalog;