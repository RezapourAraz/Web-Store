import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Dispatch
import { useDispatch, useSelector } from 'react-redux';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Styles
import styled from 'styled-components';
// validate function
import { LoginValidate } from '../utils/validate';
// 
// Action
import userLogin from '../redux/actions/userLoginAction';



const Login = () => {

    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    const [ user , setUser ] = useState({
        email: '',
        password: ''
    });

    const [ error, setError ] = useState({});
    const [ touched, setTouched ] = useState({});

    const changeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const focusHandler = e => {
        setTouched({...touched, [e.target.name]: true})
    }

    const submitHandler = e => {
        e.preventDefault();
        if(!Object.keys(error).length) {
            dispatch(userLogin(user.email, user.password))
        } else {
            setTouched({
                email: true,
                password: true
            })
        }
    }

    useEffect(() => {
        setError(LoginValidate(user))
        const navigateTo = async () => {
            if (loggedInUser.user !== '') {
                // navigate('/')
            }
        }
        navigateTo();
    },[user, touched, loggedInUser]) 

    return (
        <Section>
            <div className='form-container'>
                <div className='logo'>
                    <h2>Web<span>Store</span></h2>
                    <h4>ورود به حساب کاربری</h4>
                </div>
                <form onSubmit={submitHandler}>
                    <div className='input'>
                        <label>ایمیل</label>
                        <input 
                        type="email" 
                        placeholder='example@email.com' 
                        dir='ltr'
                        value={user.email} 
                        name='email'
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        autoComplete="off"
                        />
                        {error.email && touched.email && <span>{error.email}</span>}
                    </div>
                    <div className='input'>
                        <label>گذرواژه</label>
                        <input 
                        type="password" 
                        dir='ltr'
                        value={user.password} 
                        name='password'
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        />
                        {error.password && touched.password && <span>{error.password}</span>}
                    </div>
                    <div className='btn'>
                        <button type='submit'>ورود</button>
                    </div>
                    <div className='links'>
                        <Link to='/'>فراموشی گذرواژه!</Link>
                        <Link to='/register'>ساخت حساب جدید!</Link>
                    </div>
                </form>
            <ToastContainer />
            </div>
        </Section>
    );
};

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #F6EABE;
    display: flex;
    align-items: center;
    justify-content: center;
    .form-container {
        display: flex;
        flex-direction: column;
        width: 380px;
        height: fit-content;
        background-color: #EEEEEE;
        border: 1px solid #DAD0C2;
        padding: 1rem;
        justify-content: space-between;
        border-radius: .3rem;
        box-shadow: 0 5px 10px rgba(0,0,0,.3);
        .logo {
            text-align: center;
            h2 {
                color: #316B83;
                padding: .5rem 0;
                span {
                    color: #D57E7E;
                }
            }
            h4 {
                color: #B2B1B9;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .input {
                display: flex;
                flex-direction: column;
                padding: .3rem;
                height: 80px;
                margin: .5rem 0;
                label {
                    margin: .5rem;
                    color: #B2B1B9;
                }
                input {
                    padding: .5rem 1rem;
                    border: 1px solid #DAD0C2;
                    outline: none;
                    border-radius: .3rem;
                }
                span {
                    color: #E43F5A;
                    font-size: .7rem;
                    margin: .3rem .5rem;
                }
            }
        } 
        .btn {
            margin: 1rem .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                width: 100%;
                padding: .5rem 1rem;
                background-color: #316B83;
                color: #EEEEEE;
                font-weight: bold;
                border: none;
                border-radius: .3rem;
                outline: none;
                cursor: pointer;
                :hover {
                    box-shadow: 0 5px 10px rgba(0,0,0,.3);
                }
            }
        }
        .links {
            padding: .3rem;
            margin: .5rem 0;
            display: flex;
            justify-content: space-between;
            a {
                font-size: .7rem;
            }
        }
    }
`;


export default Login;