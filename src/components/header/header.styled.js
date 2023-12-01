import styled from 'styled-components';

export const HeaderStyle = styled.div`
    position: fixed;
    z-index: 100;
    background-color: lightgrey;
    width: 100%;
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

export const WrappTheIcon = styled.a`
    a {
        display: flex;
        padding: 9px;
        font-size: 50px;
        color: black;
        margin-left: 15px;
        &:active {
            color: #575757; 
        }
    }
`;

export const WrappTheTextIcon = styled.a`
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 25px;
        white-space: nowrap;

        &:active {
            color: #575757; 
          }
    }
    FireOutlined {
        text-decoration: none;
        color: black;
        font-weight: bold;
        font-size: 25px;
        white-space: nowrap;

        &:active {
            color: #575757; 
          }
    }
`;

export const Nav = styled.nav`
    margin-left: 275px;
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

