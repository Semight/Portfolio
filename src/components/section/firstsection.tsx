"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-40px);
  }
`;

const slideRightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(40px);
  }
`;

const StyledFirstSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  overflow: hidden;

  .container {
    width: 80%;
    height: 80vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 53px;
    display: flex;

    .b-container {
      height: 36vh;
      flex-direction: column;
      justify-content: space-between;
      align-self: stretch;
      align-items: flex-start;
      display: flex;

      .block-text {
        margin-top: 20px;
        margin-bottom: 0;
        margin-right: 40px;
        font-family: Satoshi, sans-serif;
        font-size: 1.111vw;
        font-weight: 400;
        line-height: 1.528vw;
      }

      .heading-text {
        width: 77vw;
        margin-top: 40px;
        font-family: Neutralface, sans-serif;
        font-size: 8vw;
        font-weight: 400;
        line-height: 8vw;
        display: inline-block;
        white-space: nowrap;
        animation: ${slideAnimation} 5s linear infinite;
      }

      .b-heading {
        font-family: Neutralface, sans-serif;
        font-size: 10.417vw;
        line-height: 0px;
        display: inline-block;
        white-space: nowrap;
        animation: ${slideRightAnimation} 5s linear infinite;
      }
    }
  }

  @media (max-width: 768px) {
    height: 80vh;

    .container {
      height: 15vh;
      margin-top: 40px;

      .b-container {
        .block-text {
          margin-top: 10px;
          font-size: 3vw;
          font-weight: 600;
          line-height: 4vw;
        }

        .heading-text {
          font-size: 7vw;
          line-height: 7vw;
        }

        .b-heading {
          font-size: 9vw;
        }
      }
    }
  }
`;

const Firstsection = () => {
  return (
    <>
      <StyledFirstSection>
        <div className="container">
          <div className="b-container">
            <div className="block-text">
              Hi, I&apos;m Dav, a frontend engineer based in Nigeria <br />{" "}
              working in Web-design, Motion Design, Branding <br /> and
              typography.
            </div>

            <h1 className="heading-text">
              DAVID <span>✺</span>
              FRONTEND
            </h1>
            <div className="b-heading">ENGINEER❋</div>
          </div>
        </div>
      </StyledFirstSection>
    </>
  );
};

export default Firstsection;
