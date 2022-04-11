import React from 'react';
import styled from 'styled-components';

const SpecialProducts = () => {
    return (
        <Section>
            <div className='title'>
                <h3>فروش ویژه</h3>
            </div>
            <div>
                
            </div>
        </Section>
    );
};

const Section = styled.section`
    width: 93%;
    margin: 2rem auto;
    .title {
        padding: .5rem;
        h3 {
            color: #D57E7E;
            border-bottom: 1px solid #316B83;
            padding: .5rem;
        }
    }
`;

export default SpecialProducts;