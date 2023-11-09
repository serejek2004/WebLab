import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
    .logo {
        display: flex;
        align-items: center;
        margin-top: -5px;
        p {
            color: grey;
            font-size: 20px;
            margin-left: -5px;
        }
      }
`;

export const WrappTheIcon = styled.div`
    display: flex;
    padding: 9px;
    > span {
        font-size: 23px;
        margin: 0 12px;
    }
`;

export const Nav = styled.nav`
    margin-left: 350px;

    .currentPage {
        background-color: white;
        border-radius: 50px; 
        text-align: center; 
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
        font-weight: 400;
        color: grey;

    }
`;

export const DividingLine = styled.div`
    background-color: grey;
    width: 100%;
    height: 4px;
`;
