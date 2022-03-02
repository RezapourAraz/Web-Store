import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Hamburger from './navbar/Hamburger';
import UserPopup from './popups/UserPopup';
import CartPopup from './popups/CartPopup';

// Icons
import userIcon from '../assets/icons/user.svg';
import cartIcon from '../assets/icons/shopping-cart1.svg';


const Header = () => {

    const [ userPop, setUserPop ] = useState(false);
    const [ cartPop, setCartPop ] = useState(false);

    window.addEventListener('click', event => {
        if(event.target.classList.contains('close')) {
            setCartPop(false)
        }
    })

    return (
        <TopHeader>
            <div className='header-container'>
                <div className='top-header'>
                    <div className='logo'>
                        <h2>Web<span>Store</span></h2>
                    </div>
                    <div className='btns'>
                        <Link className='btn' onClick={() => setUserPop(!userPop)} to='/'>
                            <img src={userIcon} alt="user icon"  />
                            {userPop && <UserPopup/>}
                        </Link>
                        <Link className='btn' onClick={() => setCartPop(true)} to='/'>
                            <sup>0</sup>
                            <img src={cartIcon} alt="cart icon"  />
                        </Link>
                        {cartPop && <CartPopup cartPop={cartPop}/>}
                    </div>
                </div>
                <div className='bottom-header'>
                    <Hamburger />
                </div>
            </div>
        </TopHeader>
    );
};

// Styles
const TopHeader = styled.header`
    background-color: #F6EABE;
    box-shadow: 0 5px 10px rgba(0,0,0,.3);
    .header-container {
    width: 1358px;
    margin: 0 auto;
    padding: 0 .5rem;
    .top-header {
        padding: .3rem;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            h2 {
                color: #316B83;
                span {
                    color: #D57E7E;
                }
            }
        }
        .btns {
            .btn {
                padding: .3rem;
                margin-right: .5rem;
                position: relative;
                sup {
                    color: #316B83;
                    position: absolute;
                    right: -1px;
                    background-color: #D57E7E;
                    padding: 1px 6px;
                    border-radius: 50%;
                }
                img {
                    width: 2rem;
                    cursor: pointer;
                    padding: .2rem;
                    :hover {
                        fill: #EEEEEE;
                    }
                }
            }
        }
    }
    .bottom-header {
        padding: 0 .3rem;
    }
}
@media (max-width: 980px) {
    .header-container {
        width: auto;
    }
}
`;

export default Header;