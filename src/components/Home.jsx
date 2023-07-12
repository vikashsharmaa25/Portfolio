import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="bg-[#1d1d1d] ">
        <div className="max-w-[1350px] mx-auto md:py-8 py-2 px-4">
          <Navbar />
          <Hero />
          <Hero2 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
