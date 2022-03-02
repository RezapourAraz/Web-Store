import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserPopup = () => {
    return (
            <Ul>
                <li><Link to='/'>ورود به حساب کاربری</Link></li>
                <li><Link to='/'>ورود به حساب کاربری</Link></li>
            </Ul>
    );
};

// Styles
const Ul = styled.div`
        position: absolute;
        background-color: #EEEEEE;
        width: max-content;
        padding: .5rem;
        left: 0;
        top: 20px;
        border: 1px solid #DAD0C2;
        border-radius: .3rem;
        li {
            padding: .3rem;
            a {
                margin: .2rem 0;
            }
        }
`;

export default UserPopup;