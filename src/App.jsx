import React, { useEffect, useState } from "react";
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
import LatestBlogDetails from "./pages/LatestBlogDetails";
import CategoryBlogs from "./pages/categoryBlogs";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "./redux/Notice/NoticeSlice";


const App = () => {


  const dispatch = useDispatch();
  const { notices} = useSelector((state) => state.notices);
  console.log("notice image ", notices);
  useEffect(() => {
    dispatch(fetchNotices());
  }, [dispatch]);


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupVisible, setPopupVisible] = useState(true);

  const handleClose = () => {
    if (currentImageIndex < notices.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setPopupVisible(false);
    }
  };

  console.log(notices, " popups")

  return (
    <>
      {popupVisible && notices && notices.length && (
        <div id="popoupContainer">
          <div className="imageContainer">
            <img src={`http://localhost:5000/${notices[currentImageIndex].images.replace(/\\/g,"/")}`} alt="" className="popupimg img-fluid" />
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
        <Route path="/newsactivity" element={<Blog />} />
        <Route path="/newsactivity/:id" element={<LatestBlogDetails news={true}/>} />
        <Route path="/newsactivitycategory/:categoryId" element={<CategoryBlogs news={true}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Photos />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/blog/:id" element={<LatestBlogDetails />} />
        <Route path="/category/:categoryId" element={<CategoryBlogs />} />
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
