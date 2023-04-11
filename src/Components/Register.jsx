import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./Firebase";
import "./Styles/Register.scss";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAuthValue } from "./AuthContext";
import GoogleButton from "react-google-button";
// import { NavLink } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {setTimeActive} = useAuthValue();

    const validatePassword = () => {
        let isValid = true;
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
            }
        }
        // if (name !== '')  {
        //     setError('Please enter your name');
        // }
        return isValid;
    }
    
    const register = e => {
        e.preventDefault();
        setError('');
        if (validatePassword()) {
            //Create a new user with email and password using Firebase
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                registerWithEmailAndPassword(name, email, password);
                sendEmailVerification(auth.currentUser).then(() => {
                    setTimeActive(true);
                    navigate('/movielist');
                })
            })
        }
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div className="container">
            <div className="auth">
                {/* <NavLink className="no-underline" to={'/movie'}> */}
                <h2>Register Here</h2>
                {/* {error && <div className="auth__error">{error}</div>} */}
                <form onSubmit={register} name="registration_form">
                    <input type="text" value={name} placeholder="Enter your name" required onChange={e => setName(e.target.value)}></input>
                    <input type="email" value={email} placeholder="Enter your email" required onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" value={password} placeholder="Enter your password" required onChange={e => setPassword(e.target.value)}></input>
                    <input type="password" value={confirmPassword} placeholder="Confirm your password" required onChange={e => setConfirmPassword(e.target.value)}></input>
                    <button type="submit">
                        Register
                    </button>
                    <p>------------------------------------ Or ---------------------------------</p>
                    <GoogleButton className="login__google" type="dark" onClick={signInWithGoogle}></GoogleButton>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login"> Login</Link> now.
                </span>
                {/* </NavLink> */}
            </div>
        </div>
    );
};

export default Register;