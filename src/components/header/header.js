import React from "react";
import { HeaderStyle, Nav, WrappTheIcon, DividingLine, WrappTheTextIcon} from "./header.styled";
import { FireOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
    <HeaderStyle>
        <div className="logo">
            <WrappTheIcon>
                <a href='/'><FireOutlined/></a>
            </WrappTheIcon>
            <WrappTheTextIcon>
                <a href='/'>Drone shop</a>
            </WrappTheTextIcon>
            <Nav>
                <ul>
                    <li><Link to="/" className={location.pathname === '/' ? 'homePage active' : 'homePage'}>Home</Link></li>
                    <li><Link to="/catalog" className={location.pathname === '/catalog' ? 'active' : ''}>Catalog</Link></li>
                    <li><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link></li>
                </ul>
            </Nav>
            
        </div>
        <DividingLine></DividingLine>
    </HeaderStyle>
    );
};

export default Header;