import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
    .logo {
        display: flex;
        align-items: center;
        margin-top: -5px;
        color: black;
        p {
            color: black;
            font-size: 20px;
            margin-left: -5px;
        }
      }
`;

export const WrappTheIcon = styled.div`
    display: flex;
    padding: 9px;
    cursor: pointer;
    > span {
        font-size: 50px;
        cursor: pointer;
        margin: 0 12px;
    }
`;

export const WrappTheTextIcon = styled.a`
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 25px;

        &:active {
            color: #575757; 
          }
    }
`;

export const Nav = styled.nav`
    margin-left: 250px;

    .active {
        background-color: white;
        border-radius: 50px; 
        text-align: center; 
        padding: 5px 10px;
        
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-left: 50px;
        padding: 35px;
    }

    a {
        text-decoration: none;
        font-size: 20px;
        font-weight: bolt;
        color: #171717;

    }
`;

export const DividingLine = styled.div`
    background-color: #474747;
    width: 100%;
    height: 4px;
`;

