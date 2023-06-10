"use client";
import React from "react";
import styled from "styled-components";

const StyledFifthSection = styled.div`
  height: 90vh;
  justify-content: center;
  margin-top: 100px;
  display: flex;

  @media (max-width: 768px) {
    height: 100vh;
    margin-top: 193px;
  }

  .container {
    width: 80vw;
    height: 85vh;
    justify-content: space-around;
    display: flex;

    .l-container {
      width: 40vw;

      .heading {
        margin-top: 0;
        margin-bottom: 0;
        font-family: Simplonmono, sans-serif;
        font-size: 3.889vw;
        font-weight: 500;
        line-height: 5vw;
      }
    }

    .r-container {
      width: 40vw;

      .heading1 {
        width: 40vw;
        height: 15vh;
        border-top: 1px solid #333;
        border-bottom: 1px #333;
        margin-bottom: 10px;

        .block-div {
          justify-content: space-between;
          margin-top: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          display: flex;

          .topic {
            padding-bottom: 0;
            font-family: Simplonmono, sans-serif;
            font-size: 1.667vw;
            font-weight: 500;
            line-height: 2.222vw;
          }

          .date {
            align-self: flex-end;
            font-family: Simplonmono, sans-serif;
            font-size: 1.111vw;
            font-weight: 700;
            line-height: 1.528vw;
          }
        }

        .text-block {
          .text {
            margin-bottom: 20px;
            font-family: Simplonnorm, sans-serif;
            font-size: 1.111vw;
          }
        }
      }
    }

    @media (max-width: 768px) {
      height: 69vh;
      flex-direction: column;
      align-items: center;

      .l-container {
        align-self: flex-start;

        .heading {
          margin-bottom: 40px;
          font-size: 34px;
        }
      }

      .r-container {
        width: 80vw;

        .heading1 {
          width: 80vw;
          height: 23vh;

          .block-div {
            width: 80vw;
            margin-bottom: 5px;

            .topic {
              width: 50vw;
              font-size: 22px;
              line-height: 28px;
            }

            .date {
              font-size: 12px;
              line-height: 14px;
            }
          }

          .text-block {
            .text {
              margin-bottom: 40px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;

const Fifthsection = () => {
  return (
    <>
      <StyledFifthSection>
        <div className="container">
          <div className="l-container">
            <h1 className="heading">Experience</h1>
          </div>
          <div className="r-container">
            <div className="heading1">
              <div className="block-div">
                <div className="topic">Education</div>
                <div className="date">2018-2022</div>
              </div>
              <div className="text-block">
                <div className="text">
                  Graduated the University for the Creative Arts, where I met
                  other designers like Olivia Twist, David Shaw and Paul
                  Plowman.
                </div>
              </div>
            </div>

            <div className="heading1">
              <div className="block-div">
                <div className="topic">Freelance</div>
                <div className="date">2021-Current</div>
              </div>
              <div className="text-block">
                <div className="text">
                  After graduating University, I started freelancing doing small
                  jobs while looking for a permanent role at a design studio.
                </div>
              </div>
            </div>

            <div className="heading1">
              <div className="block-div">
                <div className="topic">Visions Design</div>
                <div className="date">2021-Current</div>
              </div>
              <div className="text-block">
                <div className="text">
                  A few months after graduating University, I started working a
                  Visions Design doing Web design, motion graphics and Branding.
                </div>
              </div>
            </div>

            <div className="heading1">
              <div className="block-div">
                <div className="topic">University Workshops</div>
                <div className="date">2023</div>
              </div>
              <div className="text-block">
                <div className="text">
                  After a year and a half in the industry, I was invited back to
                  The University For The Creative Arts, this time running 1-2-1
                  sessions helping third year students with their
                </div>
              </div>
            </div>

            <div className="heading1">
              <div className="block-div">
                <div className="topic">University Talks</div>
                <div className="date">2023</div>
              </div>
              <div className="text-block">
                <div className="text">
                  While running workshops at my old university, I was also
                  invited to do a talk to the course talking about my career so
                  far and transitioning from university work
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledFifthSection>
    </>
  );
};

export default Fifthsection;
