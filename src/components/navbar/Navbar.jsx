import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = ({open}) => {


    return (
        <Nav open={open}>
            <ul>
                <li><Link to='/'>صفحه نخست</Link></li>
                <li><Link to='/'>دسته بندی</Link></li>
                <li><Link to='/'>درباره ما</Link></li>
                <li><Link to='/'>تماس با ما</Link></li>
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
    padding: .2rem;
    ul {
        display: flex;
        li {
            padding: .5rem;
            transition: background-color .3s linear;
            a {
                margin: .5rem 0;
                font-weight: bold;
            }
            :hover {
                background-color: #C1CFC0;
            }
        }
    }
    @media (max-width: 980px) {
        position: absolute;
        top: 87px;
        right: 0;
        background: #F6EABE;
        width: 300px;
        height: calc(100vh - 87px);
        transition: all .3s linear;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
        ul {
            margin-top: 2rem;
            flex-direction: column;
            text-align: center;
            li {
                margin: .5rem 0;
            }
        }
    }
`;

export default Navbar;