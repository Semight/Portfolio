"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Kaizen from "../../assets/kaizen.png";
import Leaf from "../../assets/leaf.png";
import GE from "../../assets/GE.webp";
import Clay from "../../assets/clayhouse.webp";

const slideAnimation = keyframes`
0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}
  100% {
    transform: translate3d(0px, -49.5345px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}
`;

const slideUpAnimation = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, -82.5575px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}`;

const slideLeftAnimation = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, -148.603px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}`;

const slideDownAnimation = keyframes`
  0% {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  100% {
    transform: translate3d(0px, -99.069px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}`;

const StyledSecondSection = styled.div`
  height: 160vh;
  position: relative;

  @media (max-width: 768px) {
    height: 100vh;
  }

  .div-block1 {
    will-change: transform;
    transform-style: preserve-3d;
    animation: ${slideAnimation} 5s linear infinite;

    .image {
      width: 40vw;
      height: 25vw;
      background-size: cover;
      background-position: 50%;
      position: absolute;
      top: 0rem;
      right: 10%;
    }

    @media (max-width: 768px) {
     
     .image {
      width: 60vw;
      height 70vw;
      }
    }
  }

  .div-block2 {
    will-change: transform;
    transform-style: preserve-3d;
    animation: ${slideUpAnimation} 5s linear infinite;

    .image {
      width: 40vw;
    height: 25vw;
    background-size: cover;
    background-position: 50%;
    position: absolute;
    top: 10rem;
    left: 3%;
    }

    @media (max-width: 768px) {
     
     .image {
      width: 60vw;
      height 70vw;
      }
    }
  }

  .div-block3 {
    will-change: transform;
    transform-style: preserve-3d;
    animation: ${slideLeftAnimation} 5s linear infinite;
    
    .images {
      width: 40vw;
    height: 25vw;
    background-size: cover;
    background-position: 50%;
    position: absolute;
    top: 31rem;
    left: 10%;
    }

    @media (max-width: 768px) {
     
     .images {
      width: 60vw;
      height 70vw;
      }
    }
  }

  .div-block4 {
    will-change: transform;
    transform-style: preserve-3d;
    animation: ${slideDownAnimation} 5s linear infinite;

    .images {
      width: 40vw;
    height: 25vw;
    background-size: cover;
    background-position: 50%;
    position: absolute;
    top: 30rem;
    right: 3%;
    }

    @media (max-width: 768px) {
     
     .images {
      width: 60vw;
      height 70vw;
      top: 20rem;
      }
    }
  }
`;

const Secondsection = () => {
  return (
    <>
      <StyledSecondSection>
        <div className="div-block1">
          <Image src={Kaizen} alt={""} className="image" />
        </div>
        <div className="div-block2">
          <Image src={Leaf} alt={""} className="image" />
        </div>
        <div className="div-block3">
          <Image src={GE} alt={""} className="images" />
        </div>
        <div className="div-block4">
          <Image src={Clay} alt={""} className="images" />
        </div>
      </StyledSecondSection>
    </>
  );
};

export default Secondsection;
