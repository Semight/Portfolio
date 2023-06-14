"use client";
import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LogoContainer = styled.div`
  margin-bottom: 0;
  max-width: 100%;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  background-color: #4f4f4f;
  border-radius: 5px;
  margin: 5px 0;
  padding-top: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 6px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

const StyledNav = styled.div`
  z-index: 10;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 60px;
  position: fixed;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;

  @media (max-width: 768px) {
    display: none;
  }

  .container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;

    .b-container {
      width: 480px;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      opacity: 0.95;
      mix-blend-mode: darken;
      background-color: #474747;
      border-radius: 10px;
      flex-flow: row;
      justify-content: flex-end;
      align-items: center;
      margin-left: 266px;
      display: flex;
      box-shadow: 6px 6px 17px -8px #333;

      a {
        background-color: rgb(88, 87, 87);
        color: rgb(246, 242, 239);
        border-radius: 15px;
        margin-left: 0;
        margin-right: 0;
        padding: 10px 30px;
        font-family: Simplonmono, sans-serif;
        font-size: 12px;
        font-weight: 300;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: #124559;
          color: #01161e;
        }
      }

      .contact {
        margin: 0 15px 0 0;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <div className="container">
          <div className="b-container">
            <LogoContainer>
              <ImageContainer>
                <Image src={Logo} width={40} height={40} alt="Logo Image" />
              </ImageContainer>
            </LogoContainer>
            <Link href={"/home"}>HOME</Link>
            <Link href={"/project"}>PROJECTS</Link>
            <Link href={"/contact"} className="contact">
              CONTACTS
            </Link>
          </div>
        </div>
      </StyledNav>
    </>
  );
};

export default Navbar;
