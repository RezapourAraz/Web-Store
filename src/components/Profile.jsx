import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { getDatabase, ref, update } from "firebase/database";

import { upload } from '../firebase';



const Profile = ({userData}) => {
    
    const [ photo, setPhoto ] = useState(null);

    const [ user, setUserData ] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
    })

    const changeHandler = e => {
        if (e.target.name === "profile_picture") {
            if (e.target.files[0]) {
                setPhoto(e.target.files[0])
            }
        } else {
            setUserData({...user, [e.target.name]: e.target.value})
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        // const db = getDatabase();
        // update(ref(db, 'users/' + currentUser.uid), {
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     phoneNumber: user.phoneNumber,
        // });
    }
    const uploadHandler = () => {
        // upload(photo, currentUser);
    }


    return (
        <Div>
            <div className='header-text'>
                <h3>اطلاعات حساب کاربری</h3>
            </div>
        <Form onSubmit={submitHandler}>
            <div className='right'>
                <div>
                    <label>نام </label>
                    <input 
                    type="text"
                    name='firstName'
                    value={user.firstName}
                    onChange={changeHandler}
                    disabled={userData.firstName}
                    placeholder={userData.firstName ? userData.firstName: ''} />
                </div>
                <div>
                    <label>نام خانوادگی</label>
                    <input 
                    type="text" 
                    name='lastName'
                    value={user.lastName}
                    onChange={changeHandler}
                    disabled={userData.lastName}
                    placeholder={userData.lastName ? userData.lastName : ''} />
                </div>
                <div>
                    <label>نام کاربری</label>
                    <input 
                    disabled 
                    type="text" 
                    name='userName'
                    value={userData.displayName ? userData.displayName : ''} />
                </div>
            </div>
            <div className='left'>
                <div>
                    <label>ایمیل</label>
                    <input 
                    disabled
                    type="email" 
                    name='email'
                    placeholder={userData.email ? userData.email : ''} />
                </div>
                <div>
                    <label>شماره تلفن</label>
                    <input 
                    type="number"
                    name='phoneNumber'
                    onChange={changeHandler}
                    value={user.phoneNumber}
                    disabled={userData.phoneNumber}
                    placeholder={userData.phoneNumber ? userData.phoneNumber : ''} />
                </div>
                <div>
                    <button>ثبت تغییرات</button>
                </div>
            </div>
        </Form>
        </Div>
    );
};

const Div = styled.div`
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

const Form = styled.form`
    width: auto;
    display: flex;
    justify-content: right;
    div {
        width: 90%;
        display: flex;
        flex-direction: column;
        padding: .3rem;
        label {
            margin: .5rem 0;
        }
        input {
            padding: .5rem 1rem;
            outline: none;
            border: 1px solid #DAD0C2;
            border-radius: .3rem;
        }
        button {
            margin-top: 2.4rem;
            padding: .5rem 1rem;
            outline: none;
            font-weight: bold;
            border: none;
            border-radius: .3rem;
            color: #EEEEEE;
            background-color: #316B83;
            cursor: pointer;
            box-shadow: 0 5px 5px rgba(0,0,0,0.2);
            :hover {
                box-shadow: 0 5px 10px rgba(0,0,0,0.5);
            }
        }
    }
`;

export default Profile;