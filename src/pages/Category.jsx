import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductCategory from '../components/ProductCategory';

const Category = () => {

    const {id} = useParams();
    const category = useSelector(state => state.category.category);

    return (
        <>
            <Header />
            <ProductCategory products={category[id]} title={id}/>
        </>
    );
};

export default Category;