import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

import styled from 'styled-components'

import { getDatabase, ref, child, get } from "firebase/database";
import { Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';



const UserDashboard = () => {

    const value = useContext(AuthContext);
    const { currentUser } = value;

    const [userData , setUserData ] = useState('');

    const dbRef = ref(getDatabase());
    useEffect(() => {
        get(child(dbRef, `users/${currentUser.uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setUserData(snapshot.val());
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
    },[currentUser.uid, dbRef])

    return (
        <>
        <Header />
        <Main>
            <Sidebar userData={userData} />
            <Routes>
                {/* <Route path='orders'  element={<Profile />}/>
                <Route path='lists'  element={<Profile />}/> */}
                <Route path='profile'  element={<Profile userData={userData} />}/>
            </Routes>
        </Main>
        </>
    );
};

const Main = styled.main`
    width: auto;
    height: calc(100vh - 110px);
    margin: .5rem auto;
    padding: .3rem;
    border-radius: .3rem;
    display: grid;
    grid-template-columns: 250px auto;
    gap: 1rem;
    div {
        background: #EEEEEE;
    }
`;

export default UserDashboard;