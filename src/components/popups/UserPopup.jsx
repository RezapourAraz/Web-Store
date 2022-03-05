import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from '../../contexts/AuthProvider';

// Icons
import exit from '../../assets/icons/exit.svg';
import heart from '../../assets/icons/heart.svg';
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import avatar from '../../assets/icons/account-avatar.svg';
import arrow from '../../assets/icons/left-arrow.svg';


const UserPopup = () => {

    const value = useContext(AuthContext);

    const { currentUser } = value;

    const signOutHandler = () => {
        value.logOut();
    }

    return (
            <Ul>
                <li>
                    <img src={avatar} alt="" />
                    <Link to='/dashboard'>{currentUser.email}</Link>
                    <img src={arrow} alt="" />
                </li>
                <li>
                    <img src={shoppingBag} alt="" />
                    <Link to='/'>سفارش ها</Link>
                </li>
                <li>
                    <img src={heart} alt="" />
                    <Link to='/'>لیست ها</Link>
                </li>
                <li>
                    <img src={exit} alt="" />
                    <p onClick={signOutHandler}>خروج از حساب کاربری</p>
                </li>
            </Ul>
    );
};

// Styles
const Ul = styled.div`
        position: absolute;
        background-color: #EEEEEE;
        padding: .3rem;
        left: 60px;
        top: 40px;
        width: fit-content;
        border: 1px solid #DAD0C2;
        border-radius: .3rem;
        li {
            display: flex;
            padding: .3rem;
            border-radius: .3rem;
            img {
                width: 20px;
                margin: 0 1rem;
            }
            a {
                margin: .2rem 0;
            }
            :hover {
                background-color: #DAD0C2;
            }
            p {
                cursor: pointer;
                color: #316B83;
                margin: .2rem 0;
            }
        }
`;

export default UserPopup;