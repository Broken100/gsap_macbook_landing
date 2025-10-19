import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import { ProductViewer } from "./components/ProductViewer";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
