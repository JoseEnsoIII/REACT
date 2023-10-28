import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "../src/components/LoadingAnimation/loadinganime";
const IntroPage = lazy(() => import("./pages/IntroPage"));
const Home = lazy(() => import("./pages/Home"));
const Series = lazy(() => import("./pages/series"));
const Movie = lazy(() => import("./pages/movie"));
const Anime = lazy(() => import("./pages/anime"));
const Term = lazy(() => import("./pages/term"));
const Contact = lazy(() => import("./pages/contact"));
const Login = lazy(() => import("../src/components/Login/Login"));
const Register = lazy(() => import("./components/Register/Register"));
const Forgot = lazy(() => import("./components/ForgotPass/Forgot_Pass"));
const Player = lazy(() => import("../src/pages/Player"));
const Dashboard = lazy(() => import("../src/components/Dashboard/Dashboard"));
const TopMdbi = lazy(() => import("./pages/Topmdbi"));
const BookTicket = lazy(() => import("../src/pages/BookTicket"));
const Credit = lazy(() => import("./pages/credit"));
const Signup = lazy(() => import("./pages/Sign-up"));
const Payment = lazy(() => import("./pages/Payment"));

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
        <Route path="/forgot" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Forgot /></Suspense>} />
        <Route path="/player" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Player /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Dashboard /></Suspense>} />
        <Route path="/credit" element={<Suspense fallback={<LoadingSpinner />}>{" "}    <Credit /></Suspense>} />
        <Route path="/top-imdb" element={<Suspense fallback={<LoadingSpinner />}>{" "}<TopMdbi /></Suspense>} />
        <Route path="/ticket" element={<Suspense fallback={<LoadingSpinner />}>{" "}<BookTicket /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Signup /></Suspense>} />
        <Route path="/payment" element={<Suspense fallback={<LoadingSpinner />}>{" "}<Payment /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
