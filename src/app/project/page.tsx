"use client";
import Navbar from "@/components/navbar/page";
import Topnav from "@/components/topnav/page";
import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/page";
import Sidenav from "@/components/sidenav/page";
import Image from "next/image";
import Kaizen from "../../assets/kaizen.png";
import Leaf from "../../assets/leaf.png";
import Clay from "../../assets/clayhouse.webp";
import Show from "../../assets/show.png";

const StyledProject = styled.div`
  height: 30vh;

  .containers {
    padding-top: 100px;
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;

    .div-block {
      height: 70px;
      object-fit: fill;
      justify-content: space-between;
      align-items: stretch;
      padding-top: 40px;
      display: flex;
      position: static;

      .text-block {
        width: 20vw;
        height: 20vh;
        flex: 10 auto;
        align-self: baseline;
        align-items: flex-end;
        padding-bottom: 60px;
        font-family: Neutralface, sans-serif;
        font-size: 18vh;
        line-height: 20vh;
        display: flex;

        @media (max-width: 768px) {
          height: 12vh;
        }
      }
    }
  }

  .h-container {
    height: 561px;
    justify-content: center;
    padding-top: 20px;
    display: flex;

    .project-link {
      width: 90vw;
      height: 540px;
      cursor: none;
      text-decoration: none;

      .image-container {
        height: 540px;
        border-radius: 20px;
        overflow: hidden;
      }
    }
  }

  .flex-container1,
  .flex-container2 {
    flex-direction: row;
    justify-content: space-around;
    padding-top: 60px;
    display: flex;

    .f-box {
      width: 90vw;
      height: 60vh;
      justify-content: space-around;
      display: flex;

      .box-link {
        width: 28vw;
        height: 60vh;
        cursor: none;
        text-decoration: none;

        .image-contain {
          width: 28vw;
          height: 50vh;
          border-radius: 20px;
          overflow: hidden;

          .images {
            width: 28vw;
            height: 50vh;
            background-position: 50% 50%;
          }
        }

        .text-div {
          .heading {
            color: #333;
            margin-top: 0;
            padding-left: 30px;
            font-family: Simplonmono, sans-serif;
            font-size: 1.111vw;
            text-decoration: none;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .f-box {
        height: 180vh;
        flex-direction: column;
        align-items: center;

        .box-link {
          width: 80vw;

          .image-contain {
            width: 80vw;

            .images {
              width: 80vw;
            }
          }

          .text-div {
            .heading {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .flex-container2 {
    padding-top: 20px;
  }
`;

const Project = () => {
  return (
    <>
      <StyledProject>
        <Navbar />
        <Topnav />
        <Sidenav />
        <div className="containers">
          <div className="div-block">
            <div className="text-block">Work</div>
          </div>
        </div>

        <div className="h-container">
          <a href="" className="project-link">
            <div className="image-container">
              <Image
                src={Kaizen}
                alt={""}
                style={{
                  width: "90vw",
                  height: "540px",
                  backgroundColor: "#333",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </a>
        </div>

        <div className="h-container">
          <a href="" className="project-link">
            <div className="image-container">
              <Image
                src={Leaf}
                alt={""}
                style={{
                  width: "90vw",
                  height: "540px",
                  backgroundColor: "#333",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </a>
        </div>

        <div className="h-container">
          <a href="" className="project-link">
            <div className="image-container">
              <Image
                src={Clay}
                alt={""}
                style={{
                  width: "90vw",
                  height: "540px",
                  backgroundColor: "#333",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </a>
        </div>

        <div className="flex-container1">
          <div className="f-box">
            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>

            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>

            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-container2">
          <div className="f-box">
            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>

            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>

            <a href="" className="box-link">
              <div className="image-contain">
                <Image src={Show} alt={""} className="images" />
              </div>
              <div className="text-div">
                <h1 className="heading">Showreel</h1>
              </div>
            </a>
          </div>
        </div>

        <Footer />
      </StyledProject>
    </>
  );
};

export default Project;
