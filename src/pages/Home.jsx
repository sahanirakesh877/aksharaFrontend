import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Learning from "../components/Learning";
import Blog from "./Blog";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Contact from "./Contact";
import Counter from "../components/Counter";
import About from "./About";
import CreativeWeek from "../components/CreativeWeek";
import HomeBlog from "../components/HomeBlog";
import Mission from "./../components/Mission";
import Infochek from "../components/Infochek";
import Pic from "../components/Pic";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet titleTemplate="Akashara" />
      <Banner />
      <Mission />
      <Learning />
      <Infochek />
      <About />
      <Blog />
      <Counter />
      <Testimonial />
      <HomeBlog />
      <CreativeWeek />
      <Pic />
      <Contact />
      <Brand />
    
    </>
  );
};

export default Home;
