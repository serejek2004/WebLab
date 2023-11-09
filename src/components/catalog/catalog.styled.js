import styled from 'styled-components';

export const CatalogStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

export const CardContainer = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  width: 300px;
  margin: 16px;
  box-shadow: 0px 0px 8px 0px black
`;

export const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const ProductCategory = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`

export const ProductDescription = styled.p`
  color: #555;
  height: 175px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const Image = styled.img`
  max-width: 300px;
  height: 200px;
`;

export const ViewMoreBut = styled.a`
  background-color: #474747;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  margin-top: 20px;

  &:active {
    background-color: #272727; 
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
