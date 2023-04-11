import React, { useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./Firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import "./Styles/Login.scss"
import { onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from "react-google-button";
// import LoginHeader from "./LoginHeader";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {setTimeActive} = useAuthValue();
    const navigate = useNavigate();

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => {
            if(!auth.currentUser.emailVerified) {
                sendEmailVerification(auth.currentUser).then(() => {
                    setTimeActive(true);
                    navigate('/movielist');
                })
            } else {
                navigate('/login');
            }
        })
    }

    return (
        <div className="container">
            <div className="auth">
                <h2>Log In</h2>
                {/* {error && <div className="auth__error">{error}</div>} */}
                <form onSubmit={login} name="login_form">
                    <input type="email" value={email} required placeholder="Enter your email" onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" value={password} required placeholder="Enter your password" onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit">Login</button>
                    <p>------------------------------------ Or ---------------------------------</p>
                    <GoogleButton className="login__google" type="dark" onClick={signInWithGoogle}></GoogleButton>
                </form>
                <p>
                    Don't have an account?
                    <Link to="/register">Create one here</Link>
                </p>
            </div>
        </div>
        
    );
};

export default Login;