import React from "react";
import { ItemContainer, HeadContainer, Image, InputLabels, TitleObj, InputField, FootContainer, ColaborateRectangles } from "./itemCard.styled";

const ItemCard = ({ product }) => {
    return (
        <ItemContainer>
            <HeadContainer>
                <Image src={product.image}></Image>
                <TitleObj>
                    <a>
                        {product.category}
                    </a>
                    <h1>
                        {product.title}
                    </h1>
                    <p>
                        {product.description}
                    </p>
                    <InputLabels>
                        <h4>Counting fields</h4>
                        <InputField type="text" placeholder="1237..."/>
                    </InputLabels>
                </TitleObj>
            </HeadContainer>
            <FootContainer>
                <h2>Price: {product.price}</h2>
                <ColaborateRectangles>
                    <a href='/catalog'> 
                        Go back
                    </a>
                    <a href='/cart'> 
                        Add to cart
                    </a>
                </ColaborateRectangles>
            </FootContainer>
        </ItemContainer>
    );
};

export default ItemCard;
