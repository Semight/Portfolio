"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: auto;
  background-color: #e1f210;
  margin-top: 60px;
  cursor: pointer;

  .b-container {
    display: flex;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;

    .text-container {
      .text {
        padding-top: 20px;
        font-family: Neutralface, sans-serif;
        font-size: 100px;
        font-weight: 500;
        line-height: 100px;
        margin: 0;
        text-decoration: none;
      }
    }

    @media (max-width: 768px) {
      max-width: none;

      .text-container {
        .text {
          padding-left: 20px;
          font-size: 70px;
          line-height: 80px;
        }
      }
    }
  }

  .mail-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10rem;
    overflow: hidden;
    margin: 1.4rem 0px;
    transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s;

    .mail-link {
      cursor: pointer;
      display: inline-flex;
      height: 100px;
      text-decoration: none;
      align-items: center;
      opacity: 1;
      transform: none;
      transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
        transform 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

      .mail {
        background-color: #262626;
        padding: 20px 30px;
        display: inline-flex;
        align-items: center;
        width: auto;
        border-radius: 91px;
        margin: 40px auto;
        font-size: 28px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s;

        p {
          color: #fdeee7;
          letter-spacing: -0.01em;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          margin-left: 20px;
          overflow-wrap: break-word;
        }
      }
    }

    .scroll-up {
      text-decoration: none;

      .scroll-circle {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #aaaaaa56;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s;

        .arrow {
          font-size: 1.5rem;
          z-index: 1;
          color: #fff;
        }
      }
    }

    @media (max-width: 768px) {
      display: block;
      text-align: center;
      margin: 0.4rem 0px;

      .mail-link {
        .mail {
          padding: 20px 10px;
          font-size: 22px;

          p {
            margin-left: 10px;
          }
        }
      }

      .scroll-up {
        text-align: -webkit-center;
      }
    }
  }

  .w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;

    hr {
      height: 3px;
      margin-top: 10px;
      margin-bottom: 40px;
      padding-top: 0;
      padding-bottom: 0;
      background-color: #333;
    }

    @media (max-width: 768px) {
      max-width: none;
    }
  }

  .flex-container {
    display: flex;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;

    .flex1 {
      .block-link {
        flex-direction: column;
        display: flex;

        .link {
          color: #333;
          padding-top: 30px;
          font-family: Simplonmono, sans-serif;
          font-size: 34px;
          font-weight: 500;
        }
      }
    }

    .flex2 {
      flex: 1;

      .block-link {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        display: flex;

        .link {
          z-index: 11;
          color: #333;
          justify-content: flex-end;
          padding-top: 30px;
          font-family: Simplonmono, sans-serif;
          font-size: 34px;
          font-weight: 500;
          text-decoration: none;
          display: flex;
          position: relative;
        }
      }
    }

    @media (max-width: 768px) {
      padding-bottom: 100px;
      max-width: none;

      .flex1 {
        .block-link {
          .link {
            padding-left: 20px;
            font-size: 22px;
            font-weight: 700;
          }
        }
      }

      .flex2 {
        .block-link {
          .link {
            padding-right: 20px;
            font-size: 22px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="container">
          <div className="b-container">
            <div className="text-container">
              <h1 className="text">
                Get In <br /> Contact
              </h1>
            </div>
          </div>

          <div className="mail-container">
            <a
              href="mailto:davidoluwasemiloorei@gmail.com"
              className="mail-link"
            >
              <div className="mail">
                🌍 <p>davidoluwasemiloorei@gmail.com</p>
              </div>
            </a>

            <a href="#" className="scroll-up">
              <div className="scroll-circle">
                <span className="arrow">👆🏻</span>
              </div>
            </a>
          </div>

          <div className="w-container">
            <hr />
          </div>

          <div className="flex-container">
            <div className="flex1">
              <div className="block-link">
                <a
                  href="/home"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
                <a
                  href="/project"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Work
                </a>
                <a
                  href="/contact"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="flex2">
              <div className="block-link">
                <a
                  href="https://github.com/Semight"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Github
                </a>
                <a
                  href="https://twitter.com/irefindavid"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/irefin-david-84b952241/"
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
