import React from 'react';
import styled from 'styled-components';
import CategoryBanner from './CategoryBanner';
import { useSelector } from 'react-redux';

const SecondBanners = () => {

    const categoryBanner = useSelector(state => state.categoryBanner)

    return (
        <Div>
            {
                !categoryBanner.loading && categoryBanner.categoryBanner.map((item, index) => <CategoryBanner key={index} item={item} />)
            }
        </Div>
    );
};

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 93%;
    margin: 1rem auto;
    
`;

export default SecondBanners;