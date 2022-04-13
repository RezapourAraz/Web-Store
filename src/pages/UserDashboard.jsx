import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUser } from '../redux/actions/currentUserAction';

// Styles
import styled from 'styled-components';

// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Dashboard from '../components/Dashboard';
import UserLists from '../components/UserLists';
import UserOrders from '../components/UserOrders';


const UserDashboard = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.currentUser.userInfo);

    useEffect(() => {
        dispatch(loggedInUser())
      },[dispatch])

    return (
        <>
        <Header />
        <Main>
            <Sidebar userInfo={userInfo}/>
            <Routes>
                <Route path='/' element={<Dashboard userInfo={userInfo} />} />
                <Route path='lists'  element={<UserLists />} />
                <Route path='orders'  element={<UserOrders />}/>
                <Route path='profile'  element={<Profile userInfo={userInfo} />} />
            </Routes>
        </Main>
        </>
    );
};

// Styles
const Main = styled.main`
    width: auto;
    height: calc(100vh - 110px);
    margin: .5rem auto;
    padding: .3rem;
    border-radius: .4rem;
    display: grid;
    grid-template-columns: 250px auto;
    gap: 1rem;

    div {
        // background: #EEEEEE;
        border-radius: .3rem;
        overflow: hidden;
    }
`;

export default UserDashboard;