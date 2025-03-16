import styled from 'styled-components';


export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .Nothing{
    font-size: 40px;
    margin: 0 auto;
    margin-bottom: 400px;
    margin-top: 170px;
  }
`

export const BuyButton = styled.a`
  color: white;
  margin-top: 75px;
  display: inline-block;
  width: 300px;
  font-weight: normal;
  font-size: 25px;
  border-radius: 50px;
  background-color: #474747;
  padding: 20px 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid black;
  &:active {
    background-color: #272727; 
  }
`

export const ToCatalog = styled.a`
  color: white;
  margin-top: 75px;
  display: inline-block;
  width: 300px;
  font-weight: normal;
  font-size: 25px;
  border-radius: 50px;
  background-color: #474747;
  padding: 20px 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 2px solid black;
  &:active {
    background-color: #272727; 
}
`

export const TotalPrice = styled.p`
  font-size: 35px;
  margin-top: 0px;
  margin-left: 40%;
  color: #575757;
  p {
    display: inline-block;
    margin-left: 125px;
    color: #373737;
    font-weight: bold;
  }
`

export const DroneImage = styled.img`
  width: 300px;
  margin-top: 0px;
  margin-left: 10px;
  border-radius: 8px;
`

export const DataInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 100px;
  border: 2px solid black;
  align-items: center;
  width: 70%;
  margin-left: 13.5%;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  p {
    font-size: 30px;
    font-weight: bold;
    margin-left: 40px;
  }
`

export const Price = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  font-size: 35px;
`

export const DataButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-left: 320px; */
  p {
    border-radius: 20px;
    margin-top: 35px;
    font-size: 35px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 10px;
  }
  a {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 17px;
    border-radius: 7px;
    border: 1px solid black;
    background-color: #878787;
    &:active {
    background-color: #474747; 
  }
  }
`

export const CartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  margin-bottom: 90px;
`

export const DataList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`
