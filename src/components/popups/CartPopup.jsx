import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Icons
import cartIcon from '../../assets/icons/shopping-cart1.svg';

const CartPopup = ({cartPop}) => {
    return (
        <Popup className='close' cartPop={cartPop}>
            <div className='container'>
                <div className='top-cart'>
                    <img src={cartIcon} alt="" />
                    <span>0 کالا</span>
                </div>
                <div className='middle-cart'>
                    <span>سبد خرید شما خالی است!</span>
                </div>
                <div className='bottom-cart'>
                    <Link className='cart-btn' to='/'>مشاهده سبد خرید</Link>
                    <Link className='checkout-btn' to='/'>تسویه حساب</Link>
                </div>
            </div>
        </Popup>
    );
};

const Popup = styled.section`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        height: 100vh;
        float: left;
        background: #EEEEEE;
        transition: all .3s linear;
        border: 1px solid #DAD0C2;
        transform: ${({cartPop}) => cartPop ? "translateX(0)" : "translateX(-100%)"};
        .top-cart {
            display: flex;
            height: 60px;
            align-items: center;
            padding: .5rem;
            border-bottom: 1px solid #DAD0C2;
            justify-content: center;
            img {
                width: 30px;
                margin: .5rem;
            }
        }
        .middle-cart {
            height: calc(100vh - 180px);
            padding: .5rem;
            span {
                display: block;
                padding: .5rem;
                text-align: center;
            }
        }
        .bottom-cart {
            height: 120px;
            padding: .5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px solid #DAD0C2;
            .cart-btn {
                margin: .5rem 0;
                width: 90%;
                text-align: center;
                padding: .4rem .8rem;
                border: 1px solid #316B83;
                font-weight: bold;
                border-radius: .3rem;
                transition: all .3s linear;
                :hover {
                    background: #316B83;
                    color: #EEEEEE;
                    box-shadow: 0 5px 7px rgba(0,0,0,.4);
                }
            }
            .checkout-btn {
                margin: .5rem 0;
                width: 90%;
                text-align: center;
                padding: .4rem .8rem;
                border: 1px solid #316B83;
                font-weight: bold;
                border-radius: .3rem;
                background: #316B83;
                color: #EEEEEE;
                transition: all .3s linear;
                :hover {
                    box-shadow: 0 5px 7px rgba(0,0,0,.4);
                }
        }
    }
`;

export default CartPopup;