"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Link from "next/link";

const StyledTopNav = styled.div`
  width: 100%;
`;

const Flex = styled.div`
  justify-content: center;
  display: flex;
  cursor: pointer;

  .navbar-wrap {
    width: 90vw;
    height: 10vh;
    background-color: #f6f2ef;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    display: flex;

    .block-text {
      text-align: center;
      padding-left: 5px;
      padding-right: 5px;
      font-family: Simplonmono, sans-serif;
      font-size: 0.972vw;
      font-weight: 700;
      line-height: 1.3vw;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .nav-link {
        display: flex;

        .link {
                display: flex;
                color: #333;
                padding-left: 5px;
                padding-right: 5px;
                text-decoration: none;
                position: relative;
            }

            @media (max-width: 768px) {
        font-size: 15px;
        font-weight: 900;
      }
    }
`;
const ImageContainer = styled.div`
  width: 6vw;
  height: 8vh;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
  }
`;

const Topnav = () => {
  return (
    <>
      <StyledTopNav>
        <Flex>
          <div className="navbar-wrap">
            <ImageContainer>
              <Link href="/">
                <Image src={Logo} width={40} height={40} alt="Logo Image" />
              </Link>
            </ImageContainer>
            <div className="block-text">
              Based in Nigeria <br /> 🇳🇬
            </div>
            <div className="nav-link">
              <Link
                href="/home"
                className="link"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                href="/project"
                className="link"
                style={{ textDecoration: "none" }}
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="link"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </Flex>
      </StyledTopNav>
    </>
  );
};

export default Topnav;
