import React from 'react';

// components
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import SecondBanners from '../components/SecondBanners';

const Landing = () => {

    return (
        <>
            <Header />
            <HomeBanner />
            <SecondBanners />
            <ProductsList />
        </>
    );
};

export default Landing;