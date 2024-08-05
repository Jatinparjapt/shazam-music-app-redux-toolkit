import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading components for different pages
const Home = lazy(() => import("./Pages/Home"));
const Songs = lazy(() => import("./Pages/Songs"));
const Song = lazy(() => import("./Pages/Song"));
const Artist = lazy(() => import("./Pages/Artist"));
const Download = lazy(() => import("./Pages/Download"));
const Signup = lazy(() => import("./Pages/Signup"));
const Login = lazy(() => import("./Pages/Login"));
const Playlist = lazy(() => import("./Pages/Playlist"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound"));
const Forget = lazy(()=>import("./Pages/Forget"))
const NewPassword = lazy(()=>import("./Pages/NewPassword"))
// Component defining routes and rendering layout
const Paths = () => {
  return (
    <>
      {/* Suspense fallback to show a loading component while lazy-loaded components are being fetched */}
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          {/* Route definitions for different pages */}
          <Route path='' element={<Home />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/artists/:name' element={<Artist />} />
          <Route path='/songs/:songname' element={<Song />} />
          <Route path="/download" element={<Download />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/forget" element={<Forget />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/newpassword" element={<NewPassword />} />

          {/* Route for handling undefined paths */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </Suspense>
    </>
  );
}

export default Paths;
