import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../UserContexts/UserContexts';

const Ragister = () => {
    const [error, setError] = useState('');
    // get context 
    const { createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubnit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            setError('')
            form.reset();
            navigate('/')
            handleVerifyEmail();
            toast('Verification link sent to your email!')
            handleUpdateUserProfile(name, photoURL)
            console.log(user);
        })
        .catch((error)=>{
            setError(error.message)
        })
        
    }
    // handle varify email 
    const handleVerifyEmail = ()=>{
        verifyEmail()
        .then(()=>{})
        .catch(()=>{})
    }
    // update profile 
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName:name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(()=>{})
    }

    return (
        <div className='text-center login-form w-25 mx-auto'>
        <h2>Register</h2>
        <Form onSubmit={handleSubnit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter your Name" /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Enter photo URL" /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Ragister
            </Button>
            <Form.Text className="text-danger text-center">
                {error}
            </Form.Text>
        </Form>
        <p>Already have an account? <Link to='/login'>Please Login</Link></p>
    </div>
    );
};

export default Ragister;