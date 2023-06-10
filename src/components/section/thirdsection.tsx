"use client";
import React from "react";
import styled from "styled-components";

const StyledThirdSection = styled.div`
  height: 35%;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 0;
  padding-top: 0;
  display: flex;

  // @media (max-width: 768px) {
  //   display: block;
  // }

  .container {
    width: 80vw;
    height: 65vh;
    display: flex;

    .f-container {
      width: 40vw;
      height: 50vh;

      .span-text {
        z-index: 3;
        width: 40vw;
        height: 20vh;
        font-family: Simplonmono, sans-serif;
        font-size: 4.889vw;
        font-weight: 500;
        line-height: 3.889vw;
        position: relative;

        .word {
          display: inline-block;
          opacity: 1;

          .char {
            display: inline-block;
          }
        }
      }
    }

    .s-containers {
      width: 40vw;
      height: 50vh;

      .block-texts {
        margin-bottom: 20px;
        font-family: Simplonmono, sans-serif;
        font-size: 2vw;
        font-weight: 700;
        line-height: 2.5vw;
      }

      .block-text1 {
        margin-top: 20px;
        margin-bottom: 40px;
        font-family: Satoshi, sans-serif;
        font-size: 1.111vw;
        line-height: 1.528vw;
      }
    }

    @media (max-width: 768px) {
      display: block;
      height: 40vh;

      .f-container {
        height: 10vh;

        .span-text {
          font-size: 6vw;
          font-weight: 600;
          line-height: 5vw;
        }
      }

      .s-containers {
        width: 75vw;
        height: 15vh;

        .block-texts {
          font-size: 4vw;
          line-height: 5vw;
        }

        .block-text1 {
          font-size: 3vw;
          line-height: 3vw;
        }
      }
    }
  }
`;

const Thirdsection = () => {
  return (
    <>
      <StyledThirdSection>
        <div className="container">
          <div className="f-container">
            <div className="span-text">
              <span className="word">
                <span className="char">H</span>
                <span className="char">e</span>
                <span className="char">l</span>
                <span className="char">l</span>
                <span className="char">o</span>
              </span>
              <span className="word">
                <span className="char">T</span>
                <span className="char">h</span>
                <span className="char">e</span>
                <span className="char">r</span>
                <span className="char">e</span>
                <span className="char">!</span>
              </span>
            </div>
          </div>

          <div className="s-containers">
            <div className="block-texts">
              Creating meaningful experiences and inspiring and sharing
              knowledge to others.
            </div>
            <div className="block-text1">
              Hey, I&rsquo;m Dan, a graphic designer, creative and social
              architect who loves to tell stories and creating feeling through
              the art of experimentation and motion. I&rsquo;m currently a
              designer at Visions Design doing a mix of motion graphics, web
              design and branding while also running workshops at the University
              For The Creative Arts. I&rsquo;m also a contributor to Volt, a
              design learning community teaching new creatives in Figma and
              Webflow.
            </div>
          </div>
        </div>
      </StyledThirdSection>
    </>
  );
};

export default Thirdsection;
