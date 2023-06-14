"use client";
import Navbar from "@/components/navbar/page";
import Section from "@/components/section/page";
import Topnav from "@/components/topnav/page";
import React from "react";
import styled from "styled-components";
import Footer from "@/components/footer/page";
import Sidenav from "@/components/sidenav/page";

const StyledHome = styled.div`
  width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <>
      <StyledHome>
        <Navbar />
        <Topnav />
        <Sidenav />
        <Section />
        <Footer />
      </StyledHome>
    </>
  );
};

export default Home;
