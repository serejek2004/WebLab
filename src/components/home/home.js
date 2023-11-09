import React from "react";
import title_photo from "../icons/title_photo.png";
import { HomeContainer, HeadingContentWrapper, ImageWithTextContainer, Image, Title, Text, CardContainer, HomeMain, HomeBut } from './home.styled'

const ImageWithText = ({ imageSrc, title, text }) => {
    return (
        <ImageWithTextContainer>
            <Image src={imageSrc}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </ImageWithTextContainer>
    );
};

const CardList = ({ card }) => {
    return (
        <CardContainer>
            {card.map((card, index) => (
                <ImageWithText key={index} imageSrc={card.image} title={card.title} text={card.description} />
            ))}
        </CardContainer>
    );
};

const Home = ({cards}) => {
    return (
        <HomeMain>
            <HomeContainer>
                <img src={title_photo}/>
                <HeadingContentWrapper>
                     <h1>
                         Choose your best drone to fry russian!
                     </h1>
                     <p>
                        Buying a drone is a unique way to destroy russians. It can be a birthday or New Year's gift. Give your loved ones the best emotions from destroying orcs.
                     </p>
                 </HeadingContentWrapper>
            </HomeContainer>
            <CardList card={cards} />
            <HomeBut>
                <a href='/catalog'>See more</a>
            </HomeBut>
        </HomeMain>
    );
}; 

export default Home;