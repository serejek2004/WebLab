import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;

export const SelectCategory = styled.select`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;

export const SortDrones = styled.button`
  width: 400px;
  padding: 1px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  p {
    font-weight: bold;
  }

  &:active {
    background-color: lightgrey; 
  }
`;


export const CatalogOptions = styled.div`
  margin-top: -90px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const FindBut = styled.a`
  background-color: #474747;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  display: flex;
  justify-content: center;
  width: 100px;
  margin-left: 10px;
  margin-bottom: 10px; 
  text-align: center;

  &:active {
    background-color: #272727; 
  }
`;
