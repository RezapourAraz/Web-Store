import React from 'react';
import styled from 'styled-components';
// Swiper slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


// Components
import Cart from './Cart';


const ProductCart = ({title, products}) => {

    return (
        <Section>
            {title === "mobile" && <h3>گوشی موبایل</h3>}
            {title === "watch" && <h3>ساعت هوشمند</h3>}
            <Swiper
                className='cart'
                slidesPerView={4}
                spaceBetween={0}
                scrollbar
            >
            {products.map((item, index) =>  <SwiperSlide key={index} className='product-swiper'>
                                        <Cart key={item.name} product={item} title={title} />
                                            </SwiperSlide>)}
            </Swiper>
        </Section>
    );
};

const Section = styled.section`
    margin: 1rem auto;
    width: 93%;
    padding: .3rem;
    border-radius: .3rem;
    
    h3 {
        padding: .5rem;
        display: inline-block;
        border-bottom: 2px solid #D57E7E;
        
    }
    .cart {
        .product-swiper {
            display: flex;
        }
    }
`;

export default ProductCart;