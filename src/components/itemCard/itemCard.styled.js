import styled from 'styled-components';

export const ItemContainer = styled.div`
  padding: 100px;
`;

export const Image = styled.img`
  width: 650px;
  height: auto;
  margin-top: 100px;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-left: -10px;
  margin-top: -150px;
`;

export const TitleObj = styled.p`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 100px;
  margin-top: 230px;

  a {
      background-color: #474747;
      color: #fff;
      cursor: pointer;
      border-radius: 15px;
      border: 2px solid black;
      padding: 10px 20px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      width: 260px;
      margin: 0 auto;
      margin-left: -1px;
      box-shadow: 0px 0px 2px 0px black;

      &:active {
        background-color: #878787; 
      }
  }

  h1 {
      font-size: 40px;
      width: 800px;
      text-align: start;
  }

  p {
      font-size: 25px;
      width: 700px;
      text-align: start;
  }

`;

export const InputLabels = styled.p`
  width: 600px;
  font-size: 20px;
  white-space: nowrap;
  width: 600px;
  text-align: start;
  font-weight: bold;
  .InputField {
    width: 300px;
    padding: 20px;
    margin-top: -30px;
    border: 1px solid #575757;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px black;
    margin-right: 50px;
  }
`;

export const FootContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: -175px;
  display: flex;
  justify-content: space-between;
`;

export const ColaborateRectangles = styled.div`
  width: 600px;
  display: flex;
  a {
    text-decoration: none;
    background-color: #474747;
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid black;
    padding: 20px 20px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 260px;
    margin: 0 auto;
    margin-left: 40px;
    box-shadow: 0px 0px 2px 0px black;

    &:active {
      background-color: #878787; 
    }
}
`;