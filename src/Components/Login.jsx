import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Styles/Login.scss";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            //trigger loading screen
            return;
        }
        if (user) navigate("/MainpageList");
    }, [user, loading]);

    return (
        <div className="login">
            <div className="login__container">
                <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
                <input type="passowrd" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
                    Login
                </button>   
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>           
                <div>
                    <Link to="/reset">Forgot Password?</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
}
export default Login;
