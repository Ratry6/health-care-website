import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

import './Register.css'

const Register = () => {
    const { signInUsingGoogle, createUserUsingEmail, updateUserProfile } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || './home';

    //handle name change
    const handleNameChange = e => {
       
                setName(e.target.value);
           

    }

    //sign in using google
    const handleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);

    }
    //create new user using email and password
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePass = e => {
        setPassword(e.target.value);
    }

   

    const handleRegistration = e => {
        e.preventDefault();
        
        if (password.length<6) {
            setError('password must be 6 character');
            return;
        }
        createUserUsingEmail(email, password)
            .then(result => {
                history.push(redirect_url);
                setError('');
                // updateUserProfile(name);
              
                
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div>
            <div className="login-form">
                <div>
                    <div>
                        <h2 className="registration-title">Please {isLogin ? 'Login' : 'Register'}</h2>
                    </div>
                    <Form onSubmit={handleRegistration}>
                        {/* {!isLogin && <Form.Group as={Col} onBlur={handleNameChange} controlId="formGridCity">
                            <Form.Label>Name</Form.Label>
                            <Form.Control />
                        </Form.Group> } */}

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label style={{ marginRight: '10px' }} column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handleEmail} required type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label style={{ marginRight: '10px' }} column sm={2}>
                                Password
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control onBlur={handlePass} type="password" required placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group style={{ color: 'red' }} as={Row} className="mb-3">
                            {error}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />

                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button className="signup-btn" type="submit">{isLogin ? 'Sign in' : 'Sign up'}</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    <p>Already have an account? <Link to="/login">Login </Link></p>
                    <div>or-</div>
                    <button
                        onClick={handleLogIn}
                        className="btn-regular">Google Sign In</button>

                </div>
            </div>
        </div>
    );
};

export default Register;