import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Loader from "./Loader";
import PageTransition from "../Components/pageTransition";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#111121] backdrop-blur-md shadow-[inset_0_-20px_50px_-10px_#00a9e750] relative ">
      <Loader>
        <Navbar></Navbar>
        <PageTransition>
          <section className="flex-1 ">
            <Outlet></Outlet>
          </section>
        </PageTransition>
        <Footer></Footer>
      </Loader>
    </div>
  );
};

export default RootLayout;
