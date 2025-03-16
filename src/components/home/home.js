import React, { useState } from 'react';
import title_photo from "../icons/title_photo.png";
import { HomeContainer, HeadingContentWrapper, ImageWithTextContainer, Image, Title, Text, CardContainer, HomeMain, HomeBut, TitleImage } from './home.styled'

const ImageWithText = ({ imageSrc, title, text }) => {
    return (
        <ImageWithTextContainer>
            <Image src={imageSrc}/>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </ImageWithTextContainer>
    );
};

const Home = ({ cards }) => {
    const [visibleCard, setVisibleCardCount] = useState(3); 

    const loadMore = () => {
        setVisibleCardCount(visibleCard + 2); 
    };

    return (
        <HomeMain>
            <HomeContainer>
                <TitleImage src={title_photo} />
                <HeadingContentWrapper>
                     <h1>
                         Choose your best drone to fry russian!
                     </h1>
                     <p>
                        Buying a drone is a unique way to destroy Russians. It can be a birthday or New Year's gift. Give your loved ones the best emotions from destroying orcs.
                     </p>
                 </HeadingContentWrapper>
            </HomeContainer>
            <CardContainer>
                {cards.slice(0, visibleCard).map((card, index) => (
                    <ImageWithText key={index} imageSrc={card.image} altText="Image" text={card.description} />
                ))}
            </CardContainer>
            <HomeBut>
                <a className='SeeMoreBut' onClick={loadMore}>View More</a>
            </HomeBut>
        </HomeMain>
    );
};

export default Home;
