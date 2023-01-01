import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css';
import { AuthContext } from '../UserContexts/UserContexts';

const Login = () => {
    const [error, setError] = useState('');
    const { emailLogin, providerLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const from = location.state?.from?.pathname || '/';

    // handle Login 
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password)
        .then(userCredential=>{
            const user = userCredential.user;
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }

    // logIn google 
    const handleGoogleProviderLogin = () =>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true});
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    //Login Github
    const handleGithubProviderLogin =() =>{
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            navigate(from, {replace:true});
            console.log('github user',user);
        })
        .catch((error)=>{
            setError(error)
        })
    }

    return (
        <div className='text-center login-form'>
        <h2 className='mx-5'>Login</h2>
        <div className='m-5'>
        <Form  onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger d-block text-center">
                {error}
            </Form.Text>
        </Form>
        <button className='login-btn' onClick={handleGoogleProviderLogin}>Login with Google</button>
            <br />
            <button className='login-btn'  onClick={handleGithubProviderLogin}>Login with Github</button>
        <p>New to Texile School? <Link to='/register'>Please Register</Link></p>
        </div>
    </div>
    );
};

export default Login;