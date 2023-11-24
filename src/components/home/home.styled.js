import styled from "styled-components";

export const HeadingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 100px;
    margin-top: 130px;
    h1 {
        font-size: 40px;
        width: 800px;
        margin-left: -50px;
    }

    p {
        font-size: 25px;
        width: 550px;
        text-align: start;
    }
`;

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 100px;
  text-align: center;
`;

export const ImageWithTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 10px;
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 50px;
  margin-bottom: 100px;
  height: 500px;
  width: 400px;
  box-shadow: 0px 0px 8px 0px black
`;

export const Image = styled.img`
  max-width: 450px;
  height: auto;
`;

export const TitleImage = styled.img`
  max-width: 850px;
  height: auto;
`;

export const Title = styled.p`
  font-size: 20px;
  color: #333;
  margin-top 10px;
  padding: 0 5px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  padding: 0 5px;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const HomeMain = styled.div`
`;

export const HomeBut = styled.div`
  a{
    background-color: #474747;
    text-decoration: none;
    font-weight: bold;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid #979797;
    padding: 10px 20px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 100px;
    margin: 0 auto;
    padding-right: 25px;

    &:active {
      background-color: #878787; 
    }
  }
`;
