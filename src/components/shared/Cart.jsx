import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import likeIcon from '../../assets/icons/heart-like.svg';
import dislikeIcon from '../../assets/icons/heart-dislike.svg';
import starIcon from '../../assets/icons/star.svg';

const Cart = ({product, title}) => {

    return (
        <Div>
            <Link to={`/product-detail/${product.name}`}>
                <div className='image'>
                    <div className='product-favourite'>
                        <img src={dislikeIcon} alt="Like Icon" />
                    </div>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='cart-body'>
                    <div className='product-title'>
                        {title === "mobile" && <h5> گوشی موبایل مدل<span> {product.name} </span> </h5>} 
                        {title === "watch" && <h5> ساعت هوشمند مدل<span> {product.name} </span> </h5>} 
                    </div>
                    <div className='product-rating'>
                        <img src={starIcon} alt="" />
                        <h5>{product.ranking}</h5>
                    </div>
                    <div className='product-price'>
                        <h5><span>{product.price.toLocaleString()}</span> تومان</h5>
                    </div>
                </div>
            </Link>
        </Div>
    );
};

const Div = styled.div`
    position: relative;
    margin: 1rem .6rem;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1);
    border-radius: .3rem;
    border: 1px solid #EEEEEE;
    transition: all .3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    .image {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        img {
            width: 100%;
            border-radius: .3rem;
        }
        .product-colors {
            position: absolute;
            top: .5rem;
            left: .5rem;
        }
        .product-favourite {
            opacity: 0;
            position: absolute;
            top: .5rem;
            right: .5rem;
            transition: all .3s ease-in-out;
            transform: translateX(150%);
            img {
                width: 25px;
                cursor: pointer;
            }
        }
        &:hover .product-favourite {
            opacity: 1;
            transform: translateX(0);
        }
    }
    .cart-body {
        padding: 0 .5rem;
        margin: .5rem 0;
        height: 80px;
        .product-title {
            display: flex;
            height: 40px;
            h5 {
                font-size: .7rem;
                color: #393E46;
                span {
                    font-weight: bold;
                    font-size: .7rem;
                }
            }
        }
        .product-rating {
            height: 20px;
            display: flex;
            align-items: center;
            h5 {
                font-size: .7rem;
                color: #393E46;
            }
            img {
                width: 15px;
            }
        }
        .product-price {
            float: left;
            height: 20px;
            h5 {
                color: #393E46;
            }
            span {
                color: #D57E7E;
            }
        }
    }
    &:hover {
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
    }
    `;

export default Cart;