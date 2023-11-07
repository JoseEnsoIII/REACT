import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "../src/components/LoadingAnimation/loadinganime";
const IntroPage = lazy(() => import("./pages/Mainpage/IntroPage"));
const Home = lazy(() => import("./pages/Mainpage/Home"));
const Series = lazy(() => import("./pages/Mainpage/series"));
const Movie = lazy(() => import("./pages/Mainpage/movie"));
const Anime = lazy(() => import("./pages/Mainpage/anime"));
const Term = lazy(() => import("./pages/notmain/term"));
const Contact = lazy(() => import("./pages/notmain/contact"));
const Login = lazy(() => import("../src/components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Admin = lazy(() => import("./components/Admin/Admin"));
const Forgot = lazy(() => import("./components/ForgotPass/Forgot_Pass"));
const Player = lazy(() => import("./pages/notmain/Player"));
const Dashboard = lazy(() => import("../src/components/Dashboard/Dashboard"));
const TopMdbi = lazy(() => import("./pages/Mainpage/Topmdbi"));
const BookTicket = lazy(() => import("./pages/notmain/BookTicket"));
const Credit = lazy(() => import("./pages/notmain/credit"));
const Signup = lazy(() => import("./pages/notmain/Sign-up"));
const Payment = lazy(() => import("./pages/notmain/Payment"));
const Search = lazy(() => import("./pages/notmain/Search_Movies"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Home /></Suspense>} />
        <Route path="/series" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Series /></Suspense>} />
        <Route path="/movie" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Movie /></Suspense>} />
        <Route path="/anime" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Anime /></Suspense>} />
        <Route path="/term" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Term /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Contact /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Login /></Suspense>} />
        <Route path="/reg" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Register /></Suspense>} />
        <Route path="/admin" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Admin /></Suspense>} />
        <Route path="/forgot" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Forgot /></Suspense>} />
        <Route path="/player" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Player /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Dashboard /></Suspense>} />
        <Route path="/credit" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Credit /></Suspense>} />
        <Route path="/top-imdb" element={<Suspense fallback={<LoadingSpinner />}>{" "}<TopMdbi /></Suspense>} />
        <Route path="/ticket" element={<Suspense fallback={<LoadingSpinner />}>{" "}<BookTicket /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Signup /></Suspense>} />
        <Route path="/payment" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Payment /></Suspense>} />
        <Route path="/search" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Search /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
