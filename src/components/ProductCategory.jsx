import React from 'react';
import Cart from './shared/Cart';

import styled from 'styled-components';

const ProductCategory = ({products, title}) => {
    
    return (
        <Section>
            <div className='page-title'>
                {title === "mobile" && <h3> گوشی موبایل</h3>} 
                {title === "watch" && <h3> ساعت هوشمند</h3>} 
            </div>
            <div className='products-section'>
            {
             products.map(item => <Cart key={item.name} product={item} title={title} />)
            }
            </div>
        </Section>
    );
};

const Section = styled.section`
    margin: 1rem auto;
    width: 93%;
    .page-title {
        padding: .5rem;
        margin: .5rem 0;
        border: 1px solid #EEEEEE;
        border-radius: .3rem;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        h3 {
            display: inline-block;
            color: #393E46;
            padding: .5rem 0;
            // border-bottom: 2px solid #D57E7E;
        }
    }
    .products-section {
        border: 1px solid #EEEEEE;
        border-radius: .3rem;
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        display: grid;
        grid-template-columns: repeat(4, 1fr) ;
    }
    @media (max-width: 980px) {
        .products-section{
            grid-template-columns: repeat(3, 1fr) ;
        }
    }
    @media (max-width: 600px) {
        .products-section{
            grid-template-columns: repeat(2, 1fr) ;
        }
    }
    @media (max-width: 320px) {
        .products-section{
            grid-template-columns: repeat(1, 1fr) ;
        }
    }
`;

export default ProductCategory;