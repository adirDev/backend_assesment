import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

import Logo from "assets/logo.svg";

import './index.scss';

const formFields = [
    {type: 'email', name: 'email', placeholder: 'Enter work email'},
    {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const Login = () => {
    const history = useHistory();
    const [values, setValues] = useState({[formFields[0].name]: 'sdv@joonko.co', [formFields[1].name]: '12345'});
    const [isError, setIsError] = useState(false);
    const userCookie = Cookies.get('_user_session');

    useEffect(() => {
        if (userCookie) {
            const {email} = JSON.parse(userCookie);

            if (email) {
                history.push('/');
            }
        }
    }, [])

    useEffect(() => {
        if (isError) {
            setIsError(false);
        }
    }, [values]);

    const onChangeInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const isFormValid = () => {
        let isValid = false;
        const emailSuffix = values.email.split('@')[1];

        if (emailSuffix === 'joonko.co' && values.password) {
            isValid = true;
        }

        return isValid;
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        setIsError(false)
        const isValid = isFormValid();

        if (isValid) {
            try {
                await axios.post('/users/login', values);
                history.push('/');
            } catch (err) {
                setIsError(true);
                console.error('Error sending login request', err);
            }
        } else {
            setIsError(true);
        }
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} className="header__logo" alt="logo" />
                <div className="header-wrapper">
                    <span className="title">Joonko's Jobs Manager</span>
                    <span className="subtitle">Enter your details</span>
                </div>
                <form className="auth-form" onSubmit={onSubmitForm}>
                    {formFields.map(({type, name, placeholder}) => (
                        <input
                            key={`form__${name}`}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={onChangeInput}
                        />
                    ))}
                    <button type="submit">Log in</button>
                </form>
                {isError &&
                <span className="error-msg">An error occurred, please check your credentials and try again.</span>}
            </div>
        </div>
    )
}

export default Login;