import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Context
import { AuthContext } from '../contexts/AuthProvider';

// Icons
import exit from '../assets/icons/exit.svg';
import heart from '../assets/icons/heart.svg';
import shoppingBag from '../assets/icons/shopping-bag.svg';
import avatar from '../assets/icons/account-avatar.svg';
import userIcon from '../assets/icons/user.svg';




const Sidebar = ({userData}) => {

    const value = useContext(AuthContext);

    const signOutHandler = () => {
        value.logOut();
    }

    return (
            <Div className='menu'>
                <ul>
                    <div className='profile'>
                        <img src={avatar} alt="" />
                        <Link to='/dashboard'><p>{userData.username}</p></Link>
                    </div>
                    <li>
                        <img src={shoppingBag} alt="" />
                        <Link to='orders'>سفارش ها</Link>
                    </li>
                    <li>
                        <img src={heart} alt="" />
                        <Link to='lists'>لیست ها</Link>
                    </li>
                    <li>
                        <img src={userIcon} alt="" />
                        <Link to='profile'>اطلاعات حساب کاربری</Link>
                    </li>
                    <li>
                        <img src={exit} alt="" />
                        <p onClick={signOutHandler}>خروج از حساب کاربری</p>
                    </li>
                </ul>
            </Div>
    );
};

const Div= styled.div`
    padding: .3rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
        ul {
            background: #EEEEEE;
            height: calc(100vh - 130px);
            padding: .3rem;
            text-align: center;
            .profile {
                height: 100px;
                border-bottom: 1px solid #DAD0C2;
            }
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
    .main-menu {
        // width: 100%;
        // height: 100%;
        background: #EEEEEE;
        padding: .3rem;
    }
`; 

export default Sidebar;