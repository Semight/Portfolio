"use client";
import Navbar from "@/components/navbar/page";
import Sidenav from "@/components/sidenav/page";
import Topnav from "@/components/topnav/page";
import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  height: 75vh;
  justify-content: center;

  @media (max-width: 768px) {
    height: 40vh;
  }

  .Container {
    width: 80vw;
    height: 80vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 80px;
    display: flex;
    margin-left: 7rem;

    .media-container {
      display: flex;

      .links {
        color: #333;
        margin-bottom: 10px;
        padding-bottom: 0;
        padding-right: 40px;
        text-decoration: none;
        max-width: 100%;
        display: inline-block;

        .t-links {
          font-family: Simplonmono, sans-serif;
          font-size: 2.222vw;
          font-weight: 500;
          line-height: 3vw;
        }
      }
    }

    .text-container {
      height: 36vh;
      flex-direction: column;
      justify-content: space-between;
      align-self: stretch;
      align-items: flex-start;
      display: flex;

      .text1 {
        align-items: center;
        display: flex;

        .texts {
          margin-top: 20px;
          margin-bottom: 0;
          margin-right: 40px;
          font-family: Satoshi, sans-serif;
          font-size: 1.111vw;
          font-weight: 400;
          line-height: 1.528vw;
        }

        .t-heading {
          width: 50vw;
          margin-top: 100px;
          font-family: Neutralface, sans-serif;
          font-size: 10.417vw;
          font-weight: 400;
          line-height: 3.417vw;
        }
      }

      .t-heading2 {
        font-family: Neutralface, sans-serif;
        font-size: 10.417vw;
        line-height: 3.417vw;

        .spin {
          font-family: Neutralface, sans-serif;
          font-size: 10.417vw;
          line-height: 3.417vw;
        }
      }
    }

    @media (max-width: 768px) {
      height: 250px;
      margin-top: 50px;
      margin-left: 3rem;

      .media-container {
        flex-direction: column;

        .links {
          padding-bottom: 20px;

          .t-links {
            font-size: 14px;
          }
        }
      }

      .text-container {
        height: 50px;
        align-self: flex-start;

        .text1 {
          flex-direction: column;
          order: -1;

          .texts {
            margin-top: 0;
            font-size: 12px;
            line-height: 16px;
          }

          .t-heading {
            margin-top: 40px;
            margin-bottom: 0;
            font-size: 36px;
            line-height: 42px;
          }
        }

        .t-heading2 {
          font-size: 36px;
          line-height: 42px;

          .spin {
            font-size: 36px;
            line-height: 42px;
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <>
      <StyledContact>
        <Topnav />
        <Navbar />
        <Sidenav />

        <div className="Container">
          <div className="media-container">
            <a href="" className="links">
              <div className="t-links">Instagram</div>
            </a>
            <a href="" className="links">
              <div className="t-links">LinkedIn</div>
            </a>
            <a href="" className="links">
              <div className="t-links">Email</div>
            </a>
          </div>

          <div className="text-container">
            <div className="text1">
              <div className="texts">
                I&rsquo;m currently unavailable for freelance work, <br /> but I
                always love hearing new ideas and I&rsquo;m <br /> more than
                happy to chat
              </div>
              <h1 className="t-heading">REACH❋</h1>
            </div>
            <div className="t-heading2">
              <span className="spin">OUT✺</span>
              TODAY
            </div>
          </div>
        </div>
      </StyledContact>
    </>
  );
};

export default Contact;
