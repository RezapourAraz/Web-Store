import React from 'react';
import styled from 'styled-components';

const Dashboard = ({userInfo}) => {

    return (
        <Div>
            <div className='header-text'>
                <h3> خوش آمدید {userInfo && <span>{userInfo.username}</span>} عزیز !</h3>
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
`;

export default Dashboard;