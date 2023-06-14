import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  background-color: #000;
  justify-content: center;
  align-items: center;
  height: 100vh;
  column-gap: 15px;

  .cook {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #000;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Preloader = () => {
  return (
    <Container>
      <div className="cook">Cooking....😉</div>
      <Spinner />
    </Container>
  );
};

export default Preloader;
