"use client";
import Image from "next/image";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Kai from "../../assets/kai.webp";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const StyledFourthSection = styled.div`
  width: 100%;
  height: 20vh;
  border-top: 1px solid rgba(51, 51, 51, .6);
  align-items: center;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 10vh;
  }

  .container {
    
    .r-container {
        width: 302vw;
        height: 30vh;
        align-items: center;
        display: flex;

        .sliding-text {
            width: 303vw;
            color: #333;
            font-family: Simplonmono, sans-serif;
            font-size: 10vw;
            font-weight: 500;
            line-height: 10vw;
            overflow: hidden;
            white-space: nowrap;
            transition: all 1s ease;
            animation: ${slideAnimation} 40s linear infinite;
        }
    }
`;

const Flex = styled.div`
  @media (max-width: 768px) {
    height: 770vh;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }

  .flex-container {
    width: 100%;
    height: 375vh;
    border-top: 1px solid #4f4f4f;
    justify-content: space-between;
    display: flex;

    .flex1 {
      width: 30vw;
      height: 375vh;
      border: 1px solid #333;
      justify-content: center;
      padding-top: 40px;
      display: flex;

      a {
        width: 18vw;
        height: 4vw;
        color: #333;
        cursor: pointer;
        background-color: #e1f210;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        font-size: 2vw;
        font-weight: 600;
        line-height: 1.111vw;
        text-decoration: none;
        display: flex;
        position: sticky;
        top: 100px;
        bottom: 60px;
      }
    }

    .flex2 {
      .flex2-link {
        width: 70vw;
        color: #333;
        cursor: none;
        justify-content: space-around;
        text-decoration: none;
        display: flex;

        .block1 {
          width: 35vw;
          height: 75vh;
          border: 1px solid #333;
          border-style: none solid solid none;
          padding: 40px 100px 40px 40px;
          position: relative;

          .text-flex {
            display: flex;

            .text {
              margin-bottom: 20px;
              font-family: Simplonmono, sans-serif;
              font-size: 3.889vw;
              font-weight: 500;
              line-height: 5vw;
            }

            .number {
              color: rgba(51, 51, 51, 0.6);
              font-family: Simplonmono, sans-serif;
              font-size: 0.833vw;
              font-weight: 700;
            }
          }

          .block-text {
            margin-top: 20px;
            font-family: Satoshi, sans-serif;
            font-size: 1.111vw;
            line-height: 1.528vw;
          }
        }

        .flex-image {
          width: 35vw;
          height: 75vh;
          border: 1px solid #4f4f4f;
          border-style: none solid solid none;
          justify-content: center;
          align-items: center;
          padding: 0;
          display: flex;
          position: relative;
          overflow: hidden;

          .Images {
            width: 27vw;
            height: 62vh;
            white-space: normal;
            background-position: 50% center;
            background-size: cover;
            display: block;
            position: static;
          }
        }
      }
    }

    @media (max-width: 768px) {
      height: 90vh;
      flex-direction: column;

      .flex1 {
        width: 100vw;
        height: 30vh;

        a {
          width: 40vw;
          height: 10vw;
        }
      }

      .flex2 {
        width: 100vw;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        display: flex;

        .flex2-link {
          width: 100vw;
          flex-direction: column;

          .block1 {
            width: 100vw;
            padding-left: 40px;
            padding-right: 40px;

            .text-flex {
              .text {
                font-size: 34px;
                line-height: 36px;
              }

              .number {
                display: none;
              }
            }

            .block-text {
              font-size: 12px;
              line-height: 16px;
            }
          }

          .flex-image {
            width: 100vw;

            .Images {
              width: 80vw;
            }
          }
        }
      }
    }
  }
`;

const Fourthsection = () => {
  return (
    <>
      <StyledFourthSection>
        <div className="container">
          <div className="r-container">
            <div className="sliding-text">
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
              Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺ Projects ✺
            </div>
          </div>
        </div>
      </StyledFourthSection>

      <Flex>
        <div className="flex-container">
          <div className="flex1">
            <a href="/project">See all</a>
          </div>

          <div className="flex2">
            <a href="" className="flex2-link">
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Kaizen <br /> Psychology{" "}
                  </div>
                  <div className="number">22</div>
                </div>
                <div className="block-text">
                  In psychology, Kaizen can be applied to personal development,
                  where it is used to make small, incremental changes in
                  behaviour, attitude or thinking that lead to significant
                  improvements over time.
                </div>
              </div>

              <div className="flex-image">
                <Image src={Kai} alt={""} className="Images" />
              </div>
            </a>

            <a href="" className="flex2-link">
              <div className="flex-image">
                <Image src={Kai} alt={""} className="Images" />
              </div>
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Kaizen <br /> Psychology{" "}
                  </div>
                  <div className="number">22</div>
                </div>
                <div className="block-text">
                  In psychology, Kaizen can be applied to personal development,
                  where it is used to make small, incremental changes in
                  behaviour, attitude or thinking that lead to significant
                  improvements over time.
                </div>
              </div>
            </a>

            <a href="" className="flex2-link">
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Kaizen <br /> Psychology{" "}
                  </div>
                  <div className="number">22</div>
                </div>
                <div className="block-text">
                  In psychology, Kaizen can be applied to personal development,
                  where it is used to make small, incremental changes in
                  behaviour, attitude or thinking that lead to significant
                  improvements over time.
                </div>
              </div>

              <div className="flex-image">
                <Image src={Kai} alt={""} className="Images" />
              </div>
            </a>

            <a href="" className="flex2-link">
              <div className="flex-image">
                <Image src={Kai} alt={""} className="Images" />
              </div>
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Kaizen <br /> Psychology{" "}
                  </div>
                  <div className="number">22</div>
                </div>
                <div className="block-text">
                  In psychology, Kaizen can be applied to personal development,
                  where it is used to make small, incremental changes in
                  behaviour, attitude or thinking that lead to significant
                  improvements over time.
                </div>
              </div>
            </a>

            <a href="" className="flex2-link">
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Kaizen <br /> Psychology{" "}
                  </div>
                  <div className="number">22</div>
                </div>
                <div className="block-text">
                  In psychology, Kaizen can be applied to personal development,
                  where it is used to make small, incremental changes in
                  behaviour, attitude or thinking that lead to significant
                  improvements over time.
                </div>
              </div>

              <div className="flex-image">
                <Image src={Kai} alt={""} className="Images" />
              </div>
            </a>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Fourthsection;
