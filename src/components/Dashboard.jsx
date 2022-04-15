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
    box-shadow: 0 5px 7px rgba(0,0,0,.2);
    border: 1px solid #EEEEEE;
    .header-text {
        padding: .5rem;
        text-align: center;
        border-bottom: 1px solid #EEEEEE;
        h3 {
            color: #316B83;
            span {
                color: #D57E7E;
            }
        }
    }
`;

export default Dashboard;