// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link, useNavigate } from "react-router-dom";
// import {
//     auth,
//     registerWithEmailAndPassword,
//     signInWithGoogle,
// } from "./Firebase";
// import "./Styles/Register.scss";

// function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();

//     const register = () => {
//         if (!name) alert("Please enter your name");
//         registerWithEmailAndPassword(name, email, password);
//     };
    
//     useEffect(() => {
//         if (loading) return;
//         if (user) navigate("/MainpageList");
//     }, [user, loading]);

//     return (
//         <div className="register">
//             <div className="register__container">
//                 <input type="text" className="register__textBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
//                 <input type="text" className="register__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
//                 <input type="text" className="register__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
//                 <button className="register__btn" onClick={register}> 
//                     Register
//                 </button>
//                 <button className="register__btn register__google" onClick={signInWithGoogle}>
//                     Register with Google
//                 </button>
//                 <div>
//                     Already have an account? <Link to="/login">Login</Link> now.
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Register;

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./Firebase";
import "./Styles/Register.scss";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAuthValue } from "./AuthContext";
import GoogleButton from "react-google-button";

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
        return isValid;
    }

    const inputName = () => {
        let isValid = true;
        if (name !== '')  {
            setError('Please enter your name');
        }
        return isValid;
        registerWithEmailAndPassword(name, email, password);
    }
    
    const register = e => {
        e.preventDefault();
        setError('');
        if (validatePassword()) {
            //Create a new user with email and password using Firebase
            createUserWithEmailAndPassword(auth, email, password).then(() => {
                sendEmailVerification(auth.currentUser).then(() => {
                    setTimeActive(true);
                    navigate('/verify-email');
                }).catch((err) => alert(err.message))
            })
            .catch(err => setError(err.message))
        }
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return (
        <div className="container">
            <div className="auth">
                <h2>Register Here</h2>
                {error && <div className="auth__error">{error}</div>}
                <form onSubmit={register} name="registration_form">
                    <input type="text" value={name} placeholder="Enter your name" required onChange={e => setName(e.target.value)}></input>
                    <input type="email" value={email} placeholder="Enter your email" required onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" value={password} placeholder="Enter your password" required onChange={e => setPassword(e.target.value)}></input>
                    <input type="password" value={confirmPassword} placeholder="Confirm your password" required onChange={e => setConfirmPassword(e.target.value)}></input>
                    <button type="submit">
                        Register
                    </button>
                    <p>------------------------------------ Or ---------------------------------</p>
                    <GoogleButton className="login__google" type="light" onClick={signInWithGoogle}></GoogleButton>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login"> Login</Link> now.
                </span>
            </div>
        </div>
    );
};

export default Register;