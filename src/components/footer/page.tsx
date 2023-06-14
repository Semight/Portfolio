import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: auto;
  background-color: #124559;
  margin-top: 60px;

  .mail-container {
    padding-top: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
        padding: 15px 15px;
        display: inline-flex;
        align-items: center;
        width: auto;
        border-radius: 91px;
        margin: 40px auto;
        font-size: 25px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s;

        p {
          color: #fdeee7;
          letter-spacing: -0.01em;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          margin-left: 10px;
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
        cursor: pointer;
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
            margin-left: 5px;
          }
        }
      }

      .scroll-up {
        text-align: -webkit-center;
      }
    }
  }

  .flex-container {
    padding-left: 2rem;
    padding-right: 2rem;
    color: #fff;
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ref-container {
      .ref {
        a {
          text-decoration: none;
          color: #fff;

          &:hover {
            color: #01161e;
          }
        }
      }
    }
  }

  .flex2 {
    display: flex;
    column-gap: 20px;
    color: #fff;

    .link {
      color: #fff;
      z-index: 11;
      font-family: Simplonmono, sans-serif;
      font-size: 20px;
      font-weight: 500;
      text-decoration: none;
      position: relative;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(0.9);
      }
    }

    @media (max-width: 768px) {
      .link {
        padding-right: 20px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="mail-container">
          <a href="mailto:davidoluwasemiloorei@gmail.com" className="mail-link">
            <div className="mail">
              🌍 <p>Let&apos;s talk </p>
            </div>
          </a>

          <a href="#" className="scroll-up">
            <div className="scroll-circle">
              <span className="arrow">👆🏻</span>
            </div>
          </a>
        </div>

        <div className="flex-container">
          <div className="ref-container">
            <div className="ref">
              Project Inspired by Daniel Bate <br />{" "}
              <a href="https://www.danielbatedesign.com/">
                @danielbatedesign.com
              </a>
            </div>
          </div>

          <div className="flex2">
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
      </StyledFooter>
    </>
  );
};

export default Footer;
