import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const CategoryBanner = ({item}) => {

    return (
        <Div>
             <Link to='/'>
                <img src={item.image} alt="" />
            </Link>
        </Div>
    );
};

const Div = styled.div`
    margin: 0 .6rem;
    box-shadow: 5px 5px 10px rgba(0,0,0,.3);
    border-radius: .3rem;
    overflow: hidden;
    
    a {
        img{
            height: 100%;
            width: 100%;
            transition: all .3s ease-in-out;
        }
    }
    :hover img {
        transform: scale(1.1);
    }
`;

export default CategoryBanner;