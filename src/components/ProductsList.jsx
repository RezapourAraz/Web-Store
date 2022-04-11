import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from './shared/ProductCart';


const ProductsList = () => {

    const products = useSelector(state => state.category.category)
    
    return (
        <div>
            {
                products.length === 0 ? <h1>loading</h1> : 
                Object.keys(products).map((item, index) =>  <ProductCart key={index} title={item} products={products[item]}/>)
            }
        </div>
    );
};

export default ProductsList;