import React, { useEffect, useState } from "react";
import "./App.css";
import MovieDetails from "./Components/MovieDetails";
import "./Components/Styles/MovieDetails.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainpageList from "./Components/MainpageList";
import Register from "./Components/Register";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Header from "./Components/header";
import Footer from "./Components/footer";
import SearchResults from "./Components/SearchResults";
import TrendingMovie from "./Components/Section/TrendingMovie";
import LatestMovie from "./Components/Section/LatestMovie";
import { AuthProvider } from "./Components/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/Firebase";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import AboutUs from "./Components/AboutUs";


const Test = () => {
  return (
    <div className="section">
      <h1>Now Showing</h1>
      <LatestMovie />
      <h1>Trending Now</h1>
      <TrendingMovie />
    </div>
  );
};

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  
  return (
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/login' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/register' replace/>
          } />
          <Route path="/" element={<Register />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/movielist" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
