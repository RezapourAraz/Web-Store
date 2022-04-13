import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import '../components/styles/colors.css'

import starIcon from '../assets/icons/star.svg';

import ReactTooltip from 'react-tooltip';

import Header from '../components/Header';

const ProductDetail = () => {

    const { id }= useParams();
    const allProducts = useSelector(state => state.products.products);
    const product = allProducts.find(item => item.name === id);

    const radioHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <>
            <Header/>
            <Section>
                <div className='detail-container'>
                    <div className='product-image'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className='product-detail'>
                        <div className='product-title'>
                            <h3>{product.brand.toUpperCase()} {product.name}</h3>
                        </div>
                        <div className='product-rank'>
                            <img src={starIcon} alt="" />
                            <h5> {product.ranking} </h5>
                        </div>
                        <div>
                            {product.memory ? <h4>رم : <span>{product.memory} گیگابایت</span></h4>: ''}
                        </div>
                        <div>
                           { product.storage ? <h4> حافظه داخلی : <span>{product.storage} گیگابایت</span></h4> : ''}
                        </div>
                        <div className='product-colors'>
                            <div>
                                <h4> رنگ ها : </h4>
                            </div>
                            {product.colors.map((color, index) => 
                                <div className={color} data-tip={color}>
                                    <input onChange={radioHandler} type='radio' name='color' key={index} value={color} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='product-btns'>
                        <div className='product-seller'>
                            <h5> فروشنده </h5>
                            <h4> Web<span>Store</span> </h4>
                        </div>
                        <div className='product-warranty'>
                            <h5> گارانتی 24 ماهه </h5>
                        </div>
                        <div className='product-inventory'>
                            <h5> موجود در انبار </h5>
                        </div>
                        <h4><span>{product.price.toLocaleString()}</span> تومان</h4>
                        <div className='btn'>
                            <button>افزودن به سبد</button>
                        </div>
                    </div>
                </div>
                <div className='product-description'>
                    <h3> معرفی </h3>
                    <p>{product.description}</p>
                </div>
                <ReactTooltip place="bottom" type='dark' effect='solid' />
            </Section>
        </>
    );
};

const Section = styled.section`
    width: 93%;
    margin: 1rem auto;
    padding: 1.5rem .7rem;
    border-radius: .3rem;
    .detail-container {
        display: grid;
        grid-template-columns: 300px auto 250px;
        gap: 10px;
        
        .product-image {
            border: 1px solid #EEEEEE;
            padding: .2rem;
            border-radius: .5rem;
            overflow: hidden;
            box-shadow: 0 5px 7px rgba(0,0,0,.1);
            img {
                width: 100%;
            }
        }
        h4 {
            color: #D1D1D1;
            padding: .5rem 0;
            span {
                color: #393E46;
                font-size: .9rem;
            }
        }
        h3 {
            padding: .5rem 0;
            color: #393E46;
        }
        .product-detail {
            border: 1px solid #EEEEEE;
            padding: .5rem 1rem;
            border-radius: .5rem;
            box-shadow: 0 5px 7px rgba(0,0,0,.1);
            product-title {
                padding: .3rem;
            }
            .product-rank {
                display: flex;
                align-items: center;
                img {
                    width: 15px;
                }
            }
            .product-colors {
                display: flex;
                align-items: center;
            }
           
        }
        .product-btns {
            border: 1px solid #EEEEEE;
            padding: .5rem 1rem;
            border-radius: .5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 5px 7px rgba(0,0,0,.1);
            .product-seller {
                padding: .5rem;
                border-bottom: 1px solid #EEEEEE;
                display: flex;
                justify-content: space-between;
                align-items: center;
                h4 {
                    font-family: 'Orbitron', sans-serif;
                    margin: 0 .5rem;
                    color: #316B83;
                    span {
                        color: #D57E7E;
                    }
                }
            }
            .product-warranty, .product-inventory {
                padding: .5rem;
                border-bottom: 1px solid #EEEEEE;
            }

            h4 {
                color: #393E46;
                span {
                    color: #D57E7E;
                    font-weight: bold;
                }
            }
            .btn {
                button {
                    width: 100%;
                    font-weight: bold;
                    cursor: pointer;
                    margin: .5rem 0;
                    text-align: center;
                    padding: .4rem .8rem;
                    border: 1px solid #316B83;
                    border-radius: .3rem;
                    transition: all .3s linear;
                    box-shadow: 0 5px 7px rgba(0,0,0,.1);
                    :hover {
                        background: #316B83;
                        color: #EEEEEE;
                        box-shadow: 0 5px 7px rgba(0,0,0,.3);
                    }
                }
            }
        }
    }
    .product-description {
        box-shadow: 0 5px 7px rgba(0,0,0,.1);
        border: 1px solid #EEEEEE;
        padding: .7rem;
        margin-top: 1rem;
        border-radius: .5rem;
        p {
            margin: 1rem .5rem;
            font-size: .8rem;
            color: #393E46;
        }
    }

`;

export default ProductDetail;