"use client";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import YouGO from "../../assets/yougo.png";
import GDG from "../../assets/Component 108 (1).png";
import BN from "../../assets/newsarticle_placeholder.webp";
import CA from "../../assets/chipper-app.png";
import SR from "../../assets/restaurant.png";

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
    height: 590vh;
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
        color: #fff;
        cursor: pointer;
        background-color: #124559;
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
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: translateX(-5px);
        }
      }
    }

    .flex2 {
      .flex2-link {
        width: 70vw;
        color: #333;
        cursor: pointer;
        justify-content: space-around;
        text-decoration: none;
        display: flex;

        .block1 {
          width: 35vw;
          height: 75vh;
          border: 1px solid #333;
          border-style: none solid solid none;
          padding: 40px 70px 40px 40px;
          position: relative;

          .text-flex {
            display: flex;

            .text {
              margin-bottom: 20px;
              font-family: Simplonmono, sans-serif;
              font-size: 3vw;
              font-weight: 500;
              line-height: 4vw;
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
            border-radius: 10px;
            object-fit: cover;
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
        padding-bottom: 40px;

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
            height: 40vh;
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
            <a href="https://gdg-v2.pages.dev/" className="flex2-link">
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    GDG <br /> Ibadan{" "}
                  </div>
                  <div className="number">1</div>
                </div>
                <div className="block-text">
                  In the GDG Ibadan Website, we have a dedicated section that
                  serves as a comprehensive platform to showcase all our past
                  and future events. It&apos;s the go-to place where you can
                  find detailed information, photos, and videos capturing the
                  essence of our previous gatherings. Additionally, we strive to
                  provide an extensive repository of resources, including
                  presentation slides, code repositories, and tutorials, making
                  it a valuable hub for learning and collaboration.
                </div>
              </div>

              <div className="flex-image">
                <Image src={GDG} alt={""} className="Images" />
              </div>
            </a>

            <a href="https://www.yougo-crafts.store/" className="flex2-link">
              <div className="flex-image">
                <Image src={YouGO} alt={""} className="Images" />
              </div>
              <div className="block1">
                <div className="text-flex">
                  <div className="text">YouGO</div>
                  <div className="number">2</div>
                </div>
                <div className="block-text">
                  YouGo is an e-commerce website dedicated to connecting buyers and
                  women sellers in the world of crafts. Our mission is to
                  provide a platform where women artisans and craft enthusiasts
                  can come together to sell and purchase unique handmade
                  products.
                </div>
              </div>
            </a>

            <a
              href="https://breaking-news-three.vercel.app/"
              className="flex2-link"
            >
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    News <br /> App{" "}
                  </div>
                  <div className="number">3</div>
                </div>
                <div className="block-text">
                  In the News App, you have the power to read and stay informed
                  about the latest events unfolding worldwide. Our app offers a
                  user-friendly interface where you can access a vast array of
                  news articles, covering diverse topics ranging from politics
                  and business to entertainment and sports. To ensure real-time
                  updates, the app utilizes the getServerSideProps function,
                  fetching data server-side on every request. This approach
                  guarantees that you receive the most up-to-date information at
                  your fingertips. Stay connected with the world, explore
                  breaking news, and dive into in-depth analysis, all within the
                  convenience of our News App.
                </div>
              </div>

              <div className="flex-image">
                <Image src={BN} alt={""} className="Images" />
              </div>
            </a>

            <a href="https://chipper-app.netlify.app" className="flex2-link">
              <div className="flex-image">
                <Image src={CA} alt={""} className="Images" />
              </div>
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Chipper <br /> App{" "}
                  </div>
                  <div className="number">4</div>
                </div>
                <div className="block-text">
                  This landing page represents the essence of Chipper Cash,
                  expertly crafted using React. Designed to make a lasting
                  impression, it showcases the core features and benefits of our
                  innovative financial platform. With its seamless user
                  experience and modern aesthetics, the Chipper Cash landing
                  page invites visitors to explore a world of convenient and
                  secure money transfers, instant payments, and cross-border
                  transactions. Through the power of React, we&apos;ve created
                  an interactive and responsive interface that captivates users
                  and effortlessly communicates the value of our services.
                </div>
              </div>
            </a>

            <a
              href="https://semight-restaurant.netlify.app"
              className="flex2-link"
            >
              <div className="block1">
                <div className="text-flex">
                  <div className="text">
                    Semight <br /> Restaurant{" "}
                  </div>
                  <div className="number">5</div>
                </div>
                <div className="block-text">
                  This e-commerce website is your gateway to a diverse selection
                  of food products, meticulously curated to satisfy various
                  tastes and preferences. Whether you&apos;re craving snacks,
                  beverages, or other culinary delights, our platform offers a
                  vast array of options to tantalize your taste buds. From
                  healthy and organic choices to indulgent treats, we strive to
                  cater to every palate. Explore our extensive collection,
                  browse through categories, and discover a world of flavors at
                  your fingertips. With our e-commerce website, we aim to
                  provide a seamless shopping experience that ensures your
                  culinary desires are met with convenience and satisfaction.
                </div>
              </div>

              <div className="flex-image">
                <Image src={SR} alt={""} className="Images" />
              </div>
            </a>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Fourthsection;
