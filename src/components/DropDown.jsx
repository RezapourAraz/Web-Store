import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropDown = () => {

    const products = useSelector(state => state.category.category)
    const [ isActive, setIsActive ] = useState(false);

    const mouseEnterHandler = () => {
        setIsActive(true)
    }
    const mouseLeaveHandler = () => { 
        setIsActive(false)
    }

    window.addEventListener('mousemove', event => {
        if(!event.target.classList.contains('dropDown') && isActive) {
            setIsActive(false)
        }
    })

    return (
        <Li className='dropDown' onMouseEnter={mouseEnterHandler} >
            <button className='dropDown' >دسته بندی</button>
            {
                isActive && 
            <ul className='dropDown' onMouseLeave={mouseLeaveHandler}>
                {
                products.length !== 0 && 
                Object.keys(products).map((item, index) => 
                    <li className='dropDown' key={index}>
                        <Link className='dropDown' to={`/category/${item}`}>
                            {item === "mobile" && "گوشی موبایل"}
                            {item === "watch" && "ساعت هوشمند"}
                        </Link>
                    </li>)
                }   
            </ul>
            }
        </Li>
    );
};

const Li = styled.li`
    position: relative;
    cursor: pointer;
    button {
        border: none;
        outline: none;
        background: none;
        font-weight: bold;
        font-size: 1rem;
        color: #316B83;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #fcfcfc;
        width: 200px;
        top: 40px;
        right: 0;
        border-radius: 0 0 .3rem .3rem;
    }
    @media (max-width: 980px) {
        ul {
            top: 10px;
            right: 50px;
        }
    }
`;

export default DropDown;