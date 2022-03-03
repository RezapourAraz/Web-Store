import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// validate function
import validate from '../utils/validate';


const Register = () => {

    const [ user, setUser ] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: false
    });

    const [ error, setError ] = useState({});
    const [ touched, setTouched ] = useState({});

    const changeHandler = e => {
        if(e.target.name === "checkbox") {
            setUser({...user, [e.target.name]: e.target.checked})
        } else {
            setUser({...user, [e.target.name]: e.target.value})
        }
    }

    const focusHandler = e => {
        setTouched({...touched, [e.target.name]: true})
    }

    const submitHandler = e => {
        e.preventDefault();

        if(!Object.keys(error).length) {
            console.log("Success");
        } else {
            console.log("unSuccess");
            setTouched({
                userName: true,
                email: true,
                password: true,
                confirmPassword: true,
                checkbox: true
            })
        }
    }

    useEffect(() => {
        setError(validate(user))
    },[user, touched])

    return (
        <Section>
            <div className='form-container'>
                <div className='logo'>
                    <h2>Web<span>Store</span></h2>
                    <h4>ساخت حساب کاربری جدید</h4>
                </div>
                <form onSubmit={submitHandler}>
                    <div className='input'>
                        <label>نام کاربری</label>
                        <input 
                        type="text" 
                        dir='ltr' 
                        value={user.userName} 
                        name='userName'
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        autoComplete="off"
                        />
                        {error.userName && touched.userName && <span>{error.userName}</span>}
                    </div>
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
                    <div className='input'>
                        <label>تکرار گذرواژه</label>
                        <input 
                        type="password" 
                        dir='ltr' 
                        name='confirmPassword'
                        value={user.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        />
                        {error.confirmPassword && touched.confirmPassword&& <span>{error.confirmPassword}</span>}
                    </div>
                    <div className='checkbox'>
                        <div>
                            <input 
                            type="checkbox" 
                            dir='ltr'
                            name='checkbox'
                            value={user.checkbox}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            />
                            <p>قوانین و شرایط سایت را میپذیرم</p>
                        </div>
                        {error.checkbox && touched.checkbox && <span>{error.checkbox}</span>}
                    </div>
                    <div className='btn'>
                        <button type='submit'>ثــبت نــام</button>
                    </div>
                    <div className='links'>
                        <Link to='/'>فراموشی گذرواژه!</Link>
                        <Link to='/login'>حساب کاربری دارید؟</Link>
                    </div>
                </form>
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
        form .input {
            display: flex;
            flex-direction: column;
            padding: .3rem;
            height: 80px;
            margin: 1rem 0;
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
        .checkbox {
            display: flex;
            flex-direction: column;
            padding: .3rem;
            height: 40px;
            margin: 1rem 0;
            div {
                display: flex;
                align-items: center;
                input {
                    outline: none;
                    border: none;
                }
                p {
                    color: #B2B1B9;
                    font-size: .8rem;
                    margin-right: .5rem;
                }
            }
            span {
                color: #E43F5A;
                font-size: .7rem;
                margin: .3rem .5rem;
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


export default Register;