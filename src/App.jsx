import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Head from "./components/Head";
import About from "./pages/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Kindegarten from "./pages/Kindergarten";
import SideIcon from "./components/SideIcon";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Elementryschool from "./pages/Elementryschool";
import Highschool from "./pages/Highschool";
import Middleschool from "./pages/Middleschool";
import Admissionpolicy from "./pages/Admissionpolicy";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import Photos from "./components/Photos";
import ApplyOnline from "./pages/ApplyOnline";
import ChairmanMsg from "./components/ChairmanMsg";
import Principalmsg from "./components/Principalmsg";
import LRPA from "./pages/LRPA";
// import ChatBoat from "./components/ChatBoat";
// import Qrcode from "./components/Qrcode";
import ChatApp from './components/ChatApp';
import Infrastructure from "./pages/Infrastructure";

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);
  const popimg = [
    "https://aksharaaschool.edu.np/storage/news-events/March2024/xRqFMcDy8P7lYMTjGLjkS.jpg.pagespeed.ic.eYuKu8OBu4.webp",
    "https://img.freepik.com/free-vector/flat-design-back-school-sales-concept_23-2148612151.jpg?t=st=1720522381~exp=1720525981~hmac=0b926379529b99d0a0f8b16688a8eb23dd8e5edf8df360bb2a1eaf7decc669af&w=826",
  ];
  const handleClose = () => {
    if (currentImageIndex < popimg.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setPopupVisible(false);
    }
  };

  return (
    <>
      {popupVisible && (
        <div id="popoupContainer">
          <div className="imageContainer">
            <img src={popimg[currentImageIndex]} alt="" className="popupimg img-fluid" />
            <button className="pop_btn rounded-circle" onClick={handleClose}>
              X
            </button>
          </div>
        </div>
      )}

      <TopBar />
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/academics/kindergarten" element={<Kindegarten />} />
        <Route path="/academics/elementary" element={<Elementryschool />} />
        <Route path="/academics/middle" element={<Middleschool />} />
        <Route path="/academics/high" element={<Highschool />} />
        <Route path="/admission/policy" element={<Admissionpolicy />} />
        <Route path="/admission/procedure" element={<AdmissionProcedure />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
        <Route path="/about/chairman" element={<ChairmanMsg />} />
        <Route path="/about/principal" element={<Principalmsg />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/lrpa" element={<LRPA />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Photos />} />
        <Route path="/photo" element={<Gallery />} />
      </Routes>
      <SideIcon />
      <ChatApp />
     {/* <ChatBoat/> */}
      {/* <Qrcode/> */}
      <Footer />
    </>
  );
};

export default App;
