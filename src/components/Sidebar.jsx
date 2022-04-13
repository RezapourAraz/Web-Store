import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Action
import { logOutUser } from '../redux/actions/currentUserAction';
import { uploadProfileImage } from '../redux/actions/userProfileAction';
// Styled
import styled from 'styled-components';
// Icons
import exit from '../assets/icons/exit.svg';
import heart from '../assets/icons/heart.svg';
import shoppingBag from '../assets/icons/shopping-bag.svg';
import avatar from '../assets/icons/account-avatar.svg';
import userIcon from '../assets/icons/user.svg';




const Sidebar = ({userInfo}) => {
    

    const dispatch = useDispatch();
    const userData = useSelector(state => state.currentUser.user);
    const [ photo, setPhoto ] = useState(null);
    const [ photoURL, setPhotoURL ] = useState(avatar);

    const signOutHandler = () => {
        dispatch(logOutUser())
    }

    const uploadHandler = () => {
        dispatch(uploadProfileImage(photo, userData))
    }

    const changeHandler = e => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    useEffect(() => {
        if(userData?.photoURL) {
            setPhotoURL(userData.photoURL);
        }
    },[userData])

    

    return (
            <Div className='menu'>
                <ul>
                    <div className='profile'>
                        <img src={photoURL} alt="" />
                        <input 
                            type="file"
                            className="custom-file-input"
                            onChange={changeHandler}
                            onClick={uploadHandler}
                        />
                        <Link to='/dashboard'>{userInfo && <p>{userInfo.username}</p>}</Link>
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
    box-shadow: 0 5px 7px rgba(0,0,0,.2);
        ul {
            // background: #EEEEEE;
            height: calc(100vh - 130px);
            padding: .3rem;
            text-align: center;
            .profile {
                position: relative;
                height: 100px;
                border-bottom: 1px solid #DAD0C2;
                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    object-fit: cover;
                }
                .custom-file-input {
                    width: 15px;
                    position: absolute;
                    top: 45px;
                    right: 135px;
                }
                .custom-file-input::-webkit-file-upload-button {
                    visibility: hidden;
                }
                .custom-file-input::before {
                    content: '+';
                    display: inline-block;
                    background: linear-gradient(top, #f9f9f9, #e3e3e3);
                    border: 1px solid #999;
                    border-radius: 3px;
                    padding: 1px 2px;
                    outline: none;
                    white-space: nowrap;
                    -webkit-user-select: none;
                    cursor: pointer;
                    text-shadow: 1px 1px #fff;
                    font-weight: 700;
                    font-size: 10pt;
                }
                .custom-file-input::after {
                    content: '';
                }
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