import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


// components
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';

const Landing = () => {

    const products = useSelector(state => state.products);

    return (
        <>
            <Header />
            <HomeBanner />
            {/* {
                products.loading ? <h1>درحال دریافت اطلاعات</h1> : products.products.map(item => 
                    <div>
                        <img src={item.image} alt={item.name} />
                        <h1>{item.name}</h1>
                    </div>
                )
            } */}
        </>
    );
};

export default Landing;