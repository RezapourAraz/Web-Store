import React, { useEffect, useState } from 'react';

// Styles
import styled from 'styled-components';

// Firebase 
import { getDatabase, ref, child, get } from "firebase/database";
import { Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Dashboard from '../components/Dashboard';
import UserLists from '../components/UserLists';
import UserOrders from '../components/UserOrders';


const UserDashboard = () => {


    const [userData , setUserData ] = useState('');

    const dbRef = ref(getDatabase());

    // useEffect(() => {
    //     get(child(dbRef, `users/${currentUser.uid}`)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             setUserData(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //         }).catch((error) => {
    //             console.error(error);
    //         });
    // },[currentUser.uid, dbRef])

    return (
        <>
        <Header />
        <Main>
            <Sidebar userData={userData} />
            <Routes>
                <Route path='/' element={<Dashboard userData={userData} />} />
                <Route path='lists'  element={<UserLists />}/>
                <Route path='orders'  element={<UserOrders />}/>
                <Route path='profile'  element={<Profile userData={userData} />}/>
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
        background: #EEEEEE;
        border-radius: .3rem;
        overflow: hidden;
    }
`;

export default UserDashboard;