import React, { useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import "./Styles/Login.scss";
import { onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import GoogleButton from "react-google-button";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children}) => {
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setCurrentUser(user);
//             } else {
//                 setCurrentUser(null);
//             }
//         });
//     }, [currentUser]);

//     return (
//         <AuthContext.Provider value={{ currentUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();

//     // useEffect(() => {
//     //     if (loading) {
//     //         //trigger loading screen
//     //         return;
//     //     }
//     //     if (user) navigate("/MainpageList");
//     // }, [user, loading]);

//     // const getCurrentUser = async function () {
//     //     const currentUser = await Parse.User.current();
//     //     setCurrentUser(currentUser);
//     //     return currentUser;
//     // };

//     return (
        
//         <div className="login">
//             <div className="login__container">
//                 <input type="text" className="login__textBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
//                 <input type="passowrd" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
//                 <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
//                     Login
//                 </button>   
//                 {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
//                     Login with Google
//                 </button>            */}
//                 <GoogleButton className="login__google" type="light" onClick={signInWithGoogle}></GoogleButton>
//                 <div>
//                     <Link to="/reset">Forgot Password?</Link>
//                 </div>
//                 <div>
//                     Don't have an account? <Link to="/register">Register</Link> now.
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Login;

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
                    navigate('/verify-email');
                })
                .catch(err => alert(err.message))
            } else {
                navigate('/login');
            }
        })
        .catch(err => setError(err.message))
    }

    return (
        <div className="container">
            <div className="auth">
                <h2>Log In</h2>
                {error && <div className="auth__error">{error}</div>}
                <form onSubmit={login} name="login_form">
                    <input type="email" value={email} required placeholder="Enter your email" onChange={e => setEmail(e.target.value)}></input>
                    <input type="password" value={password} required placeholder="Enter your password" onChange={e => setPassword(e.target.value)}></input>
                    <button type="submit">Login</button>
                    <p>------------------------------------ Or ---------------------------------</p>
                    <GoogleButton className="login__google" type="light" onClick={signInWithGoogle}></GoogleButton>
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