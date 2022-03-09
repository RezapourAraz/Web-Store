import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Auth Context
import { AuthContext } from '../contexts/AuthProvider';

// Components
import Hamburger from './navbar/Hamburger';
import CartPopup from './popups/CartPopup';
import User from './User';

// Icons
import cartIcon from '../assets/icons/shopping-cart1.svg';


const Header = () => {

    const [ cartPop, setCartPop ] = useState(false);
    const {currentUser} = useContext(AuthContext);

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
                        { currentUser ? <User user={currentUser} /> : 
                        <Link className='login-btn' to='/login'>
                            ثبت نام و ورود
                        </Link>}
                        <Link className='btn' onClick={() => setCartPop(true)} to=''>
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
            align-items: center;
            display: flex;
            .login-btn {
                padding: .2rem .8rem;
                border: 1px solid #316B83;
                border-radius: .3rem;
                font-weight: bold;
                transition: all .3s linear;
                :hover {
                    background-color: #316B83;
                    color: #EEEEEE;
                }
            }
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