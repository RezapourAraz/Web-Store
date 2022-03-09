import React from 'react';
import styled from 'styled-components';

const UserOrders = () => {
    return (
        <Div>
            <div className='header-text'>
                <h3>سفارش ها</h3>
            </div>
            <div className='main-text'>
                <p>لیست سفارش های شما خالی میباشد!</p>
            </div>
        </Div>
    );
};

const Div = styled.div`
    padding: .3rem;
    .header-text {
        padding: .5rem;
        text-align: center;
        border-bottom: 1px solid #DAD0C2;
        h3 {
            color: #316B83;
            span {
                color: #D57E7E;
            }
        }
    }
    .main-text {
        padding: .5rem;
        text-align: center;
        p {
            color: #316B83;
        }
    }
`;

export default UserOrders;