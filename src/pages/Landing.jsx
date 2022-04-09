import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


// components
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import SecondBanners from '../components/SecondBanners';

const Landing = () => {

    const products = useSelector(state => state.products);

    return (
        <>
            <Header />
            <HomeBanner />
            <SecondBanners />
        </>
    );
};

export default Landing;