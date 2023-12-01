import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 250px;
  padding: 10px;
  margin-top: 20px;
  border: 2px solid #575757;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 0px black;
  margin-right: 50px;
`;

export const SelectCategory = styled.select`
  width: 250px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 15px;
  margin-right: 50px;
  box-shadow: 0px 0px 8px 0px black;
  border: 2px solid #575757;
`;

export const SortDrones = styled.select`
  width: 250px;
  padding: 1px;
  margin-top: 20px;
  border: 2px solid #575757;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 0px black;
  p {
    font-weight: bold;
  }

  &:active {
    background-color: lightgrey; 
  }
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -10px;
`;


export const CatalogOptions = styled.div`
  margin-top: 124px;
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: white;
`;

export const FindBut = styled.a`
  background-color: #474747;
  color: #fff;
  cursor: pointer;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid grey;
  display: flex;
  justify-content: center;
  width: 100px;
  margin-top: 20px;
  margin-left: 15%;
  text-align: center;
  box-shadow: 0px 0px 8px 0px black;

  &:active {
    background-color: #272727; 
  }
`;

export const DividingLine = styled.div`
    background-color: #474747;
    width: 100%;
    margin-top: 10px;
    height: 4px;
`;
