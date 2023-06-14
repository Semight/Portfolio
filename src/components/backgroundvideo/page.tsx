"use client";
import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import Image from "next/image";

const StyledVideo = styled.div`
  z-index: -3;
  width: 100vw;
  height: 100vh;
  mix-blend-mode: color-burn;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;

  .background-video {
    z-index: -3;
    width: 33vw;
    height: 33vw;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
`;

const VideoContainer = styled.div`
  // position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  .video-placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    margin: auto;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%;
    animation: turn 5s infinite linear;
    transform-style: preserve-3d;
    vertical-align: baseline;
    display: inline-block;
  }

  @keyframes turn {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const Backgroundvideo = () => {
  return (
    <>
      <StyledVideo>
        <div className="background-video">
          <VideoContainer>
            <Image src={Logo} alt={""} className="video-placeholder"></Image>
          </VideoContainer>
        </div>
      </StyledVideo>
    </>
  );
};

export default Backgroundvideo;
