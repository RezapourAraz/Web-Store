import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Styles
import styled from 'styled-components'
// ACtions
import { updateUser } from '../redux/actions/updateUserAction';



const Profile = ({userInfo}) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.currentUser.user);

    const [ user, setUserData ] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
    })

    const changeHandler = e => {
        setUserData({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        dispatch(updateUser(user, userData))
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
                    disabled={userInfo && userInfo.firstName}
                    placeholder={userInfo ? userInfo.firstName : ''} />
                </div>
                <div>
                    <label>نام خانوادگی</label>
                    <input 
                    type="text" 
                    name='lastName'
                    value={user.lastName}
                    onChange={changeHandler}
                    disabled={userInfo && userInfo.lastName}
                    placeholder={userInfo ? userInfo.lastName : ''} />
                </div>
                <div>
                    <label>نام کاربری</label>
                    <input 
                    disabled 
                    type="text" 
                    name='userName'
                    value={userInfo ? userInfo.username : ''} />
                </div>
            </div>
            <div className='left'>
                <div>
                    <label>ایمیل</label>
                    <input 
                    disabled
                    type="email" 
                    name='email'
                    placeholder={userInfo ? userInfo.email : ''} />
                </div>
                <div>
                    <label>شماره تلفن</label>
                    <input 
                    type="number"
                    name='phoneNumber'
                    onChange={changeHandler}
                    value={user.phoneNumber}
                    disabled={userInfo && userInfo.phoneNumber}
                    placeholder={userInfo ? userInfo.phoneNumber : ''} />
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