import React from 'react';
import styled, { keyframes } from 'styled-components';

const speed = '2.5s';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(#eee, #444);
`;

const Loader = styled.div`
  width: 175px;
  height: 100px;
`;

const LoadAnimation = keyframes`
  0% {
    background: #ccc;
    margin-top: 25%;
    height: 10%;
  }
  50% {
    background: #444;
    height: 100%;
    margin-top: 0%;
  }
  100% {
    background: #ccc;
    height: 10%;
    margin-top: 25%;
  }
`;

const LoaderBar = styled.div`
  display: block;
  background: #ccc;
  width: 7px;
  height: 10%;
  border-radius: 14px;
  margin-right: 5px;
  float: left;
  margin-top: 25%;

  &:nth-child(1) {
    animation: ${LoadAnimation} ${speed} 1.4s infinite linear;
  }
  &:nth-child(2) {
    animation: ${LoadAnimation} ${speed} 1.2s infinite linear;
  }
  &:nth-child(3) {
    animation: ${LoadAnimation} ${speed} 1s infinite linear;
  }
  &:nth-child(4) {
    animation: ${LoadAnimation} ${speed} 0.8s infinite linear;
  }
  &:nth-child(5) {
    animation: ${LoadAnimation} ${speed} 0.6s infinite linear;
  }
  &:nth-child(6) {
    animation: ${LoadAnimation} ${speed} 0.4s infinite linear;
  }
  &:nth-child(7) {
    animation: ${LoadAnimation} ${speed} 0.2s infinite linear;
  }
  &:nth-child(8) {
    animation: ${LoadAnimation} ${speed} 0s infinite linear;
  }
  &:nth-child(9) {
    animation: ${LoadAnimation} ${speed} 0.2s infinite linear;
  }
  &:nth-child(10) {
    animation: ${LoadAnimation} ${speed} 0.4s infinite linear;
  }
  &:nth-child(11) {
    animation: ${LoadAnimation} ${speed} 0.6s infinite linear;
  }
  &:nth-child(12) {
    animation: ${LoadAnimation} ${speed} 0.8s infinite linear;
  }
  &:nth-child(13) {
    animation: ${LoadAnimation} ${speed} 1s infinite linear;
  }
  &:nth-child(14) {
    animation: ${LoadAnimation} ${speed} 1.2s infinite linear;
  }
  &:nth-child(15) {
    animation: ${LoadAnimation} ${speed} 1.4s infinite linear;
  }
`;

function AnimatedLoader() {
  return (
    <LoaderContainer>
      <Loader>
        {[...Array(15)].map((_, index) => (
          <LoaderBar key={index} />
        ))}
      </Loader>
    </LoaderContainer>
  );
}

export default AnimatedLoader;
