import React from 'react';
import styled from 'styled-components';

const Cart = ({product, title}) => {

    return (
        <Div>
            <div className='image'>
                <img src={product.image} alt="" />
                <div className='product-colors'>
                    {/* {product.colors.map(item => <h5>{item}</h5>)} */}
                </div>
            </div>
            <div className='cart-body'>
                <div className='product-title'>
                    {title === "mobile" && <h5> گوشی موبایل مدل<span> {product.name} </span> </h5>} 
                    {title === "watch" && <h5> ساعت هوشمند مدل<span> {product.name} </span> </h5>} 
                </div>
                <div className='product-rating'>
                    <h5>{product.ranking}</h5>
                </div>
                <div className='product-price'>
                    <h5><span>{product.price.toLocaleString()}</span> تومان</h5>
                </div>
           </div>
        </Div>
    );
};

const Div = styled.div`
    position: relative;
    margin: 1rem .6rem;
    // height: 390px;
    box-shadow: 0px 5px 10px rgba(0,0,0,.1);
    border-radius: .3rem;
    background-color: #F6EABE;
    transition: all .3s ease-in-out;
    cursor: pointer;
    .image {
        width: 100%;
        margin: 0 auto;
        img {
            width: 100%;
            border-radius: .3rem;
        }
        .product-colors {
            position: absolute;
            top: .5rem;
            left: .5rem;
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
                span {
                    font-weight: bold;
                    font-size: .7rem;
                }
            }
        }
        .product-rating {
            height: 20px;
            h5 {
                font-size: .7rem;
            }
        }
        .product-price {
            float: left;
            height: 20px;
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