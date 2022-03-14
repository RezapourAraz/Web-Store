import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Navbar from './Navbar';

const Hamburger = () => {

    const [ open, setOpen ] = useState(false)

    return (
        <Div open={open}>
            <div onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Navbar open={open} />
        </Div>
    );
};

// Styles
const Div = styled.div`
    display: flex;
    align-items: center;
    z-index: 50;
    div {
        cursor: pointer;
        width: 2.2rem;
        height: 2rem;
        padding: .2rem;
        display: none;
        div {
            width: 2rem;
            height: .4rem;
            background-color: #316B83;
            margin: .15rem 0;
            border-radius: .2rem;
        }
    }
    @media (max-width: 980px) {
        padding: .2rem;
        div {
            display: block;
            transition: all .3s linear;
            transform-origin: 4px;
            div:nth-child(1) {
                transform: ${({open}) => open ? "rotate(45deg)" : "rotate(0deg)"};
            }
            div:nth-child(2) {
                transform: ${({open}) => open ? "translateX(100%)" : "translateX(0)"};
                opacity: ${({open}) => open ? "0" : "1"};
            }
            div:nth-child(3) {
                transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(0deg)"};
            }
        }
    }
`;

export default Hamburger;