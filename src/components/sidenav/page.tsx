"use client";
import React from "react";
import styled from "styled-components";

const StyledSidenav = styled.div`
  position: fixed;
  z-index: 999;
  transform: translateY(-50%);
  top: 50%;
  right: 0;

  .container {
    width: 40px;
    height: 190px;
    background-color: black;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: black;
    }

    h1 {
      text-align: center;
      font-family: ui-monospace;
      padding-top: 15px;
      font-family: ui-monospace;
      padding-top: 10px;
      margin: 0;
    }
  }
`;

const Sidenav = () => {
  return (
    <>
      <StyledSidenav>
        <div className="container">
          <h1>I</h1>
          <h1>R</h1>
          <h1>E</h1>
          <h1>F</h1>
          <h1>I</h1>
          <h1>N</h1>
        </div>
      </StyledSidenav>
    </>
  );
};

export default Sidenav;
