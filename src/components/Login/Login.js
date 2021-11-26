import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/UseAuth';
import {  Form, Row } from 'react-bootstrap';

const Login = () => {
    const { signInUsingGoogle, signInUsingEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]  =  useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // sign in using google
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePass = e => {
        setPassword(e.target.value);
    }

    // sign in with email
    const handleSignInWithEmail = e => {
        e.preventDefault();
        if(password.length<6){
            setError('password must be at least 6 characters');
            return;
        }
        // if(!/(?=.*\d)(?=.*[a-zA-Z])/.test(password)){
        //     setError('password must contain at least 1 digit,1 alphabetic character');
        //     return;
        // }
        signInUsingEmail(email, password)
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error =>{
                setError(error.message);
            })
       
    }




    return (
        <div className="login-form">
            <div>
                <div>
                    <h2 className="title"><FontAwesomeIcon icon={faSignInAlt} />  Login</h2>
                </div>
                <Form onSubmit={handleSignInWithEmail}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group style={{color:'red'}} as={Row} className="mb-3">
                            {error}
                        </Form.Group>
                    <button

                        className="btn-regular">Sign In</button>
                </Form>
                <p>Don't have an account? <Link to="/register">Create Account </Link></p>
                <div>or-</div>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;