"use client";
import Navbar from "@/components/navbar/page";
import Section from "@/components/section/page";
import Topnav from "@/components/topnav/page";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "@/components/footer/page";
import Sidenav from "@/components/sidenav/page";
import Preloader from "@/components/preloader/page";

const StyledHome = styled.div`
  width: 100%;
  height: auto;
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task, e.g., fetching data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <StyledHome>
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <Navbar />
            <Topnav />
            <Sidenav />
            <Section />
            <Footer />
          </div>
        )}
      </StyledHome>
    </>
  );
};

export default Home;
