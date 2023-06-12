"use client";
import React from "react";
import styled from "styled-components";
import Firstsection from "./firstsection";
import Thirdsection from "./thirdsection";
import Fourthsection from "./fourthsection";
import Fifthsection from "./fifthsection";

const StyledSection = styled.div``;

const Section = () => {
  return (
    <>
      <StyledSection>
        <Firstsection />
        <Thirdsection />
        <Fourthsection />
        <Fifthsection />
      </StyledSection>
    </>
  );
};

export default Section;
