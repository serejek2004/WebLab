import React from "react";
import { Link } from 'react-router-dom';
import { CardContainer, ProductName, ProductCategory, ProductDescription, ProductPrice, Image, ViewMoreBut } from './ProductCard.styled'
import first_drone from "../icons/first_drone.png";
import second_drone from "../icons/second_drone.png";
import third_drone from "../icons/third_drone.png";
import fourth_drone from "../icons/fourth_drone.png";
import fifth_drone from "../icons/fifth_drone.png";
import sixth_drone from "../icons/sixth_drone.png";
import seventh_drone from "../icons/seventh_drone.png";
import title_drone from "../icons/title_photo.png"

let cardImages = [
  first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone, 
  first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
  first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
  first_drone, second_drone, third_drone, fourth_drone, fifth_drone, sixth_drone, seventh_drone, title_drone,
]

const ProductCard = ({ product, onViewMore }) => {
    const handleViewMoreClick = () => {
        onViewMore(product);
    };

    return (
      <CardContainer>
        <Image src={cardImages[product.id-1]}/>
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