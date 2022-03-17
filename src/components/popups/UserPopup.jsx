import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import exit from '../../assets/icons/exit.svg';
import heart from '../../assets/icons/heart.svg';
import shoppingBag from '../../assets/icons/shopping-bag.svg';
import avatar from '../../assets/icons/account-avatar.svg';
import arrow from '../../assets/icons/left-arrow.svg';

import { logOutUser } from '../../redux/actions/currentUserAction';


const UserPopup = () => {

    const dispatch = useDispatch();
    const { userInfo, user } = useSelector(state => state.currentUser)
    
    const signOutHandler = () => {
        dispatch(logOutUser())
    }

    return (
            <Ul>
                <li>
                    <img className='profile-image' src={user.photoURL ? user.photoURL : avatar} alt="" />
                    <Link to='/dashboard'>{userInfo && userInfo.username}</Link>
                    <img src={arrow} alt="" />
                </li>
                <li>
                    <img src={shoppingBag} alt="" />
                    <Link to='/dashboard/orders'>سفارش ها</Link>
                </li>
                <li>
                    <img src={heart} alt="" />
                    <Link to='/dashboard/lists'>لیست ها</Link>
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
            .profile-image {
                width: 25px;
                margin: 0 1rem;
                border-radius: 50%;
                object-fit: cover;
            }
            img {
                width: 25px;
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