import styled, { keyframes } from 'styled-components';
import React from 'react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  }
`;

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem;
  position: relative;
  scroll-snap-align: start;
  background: url('/src/assets/hero-bg.png') center center / cover no-repeat;
  background-attachment: fixed; // para un efecto más envolvente
  z-index: 0;
  overflow: hidden;
`;

const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #0f172a);
  z-index: 1;
`;



const Glow = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #38bdf8 0%, transparent 60%);
  opacity: 0.12;
  filter: blur(100px);
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: #38bdf8;
  text-shadow: 0 0 25px rgba(56, 189, 248, 0.7);
  margin-bottom: 1rem;
  z-index: 2;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #cbd5e1;
  max-width: 640px;
  margin-bottom: 2rem;
  z-index: 2;
  animation: ${fadeInUp} 1s ease forwards;
`;

const Button = styled.a`
  background: linear-gradient(90deg, #38bdf8, #6366f1);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  z-index: 2;
  animation: ${fadeInUp} 1.2s ease forwards;
  animation-delay: 0.2s;
  animation-fill-mode: both;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  animation: ${pulse} 3s infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 35px rgba(99, 102, 241, 0.6);
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Glow />
      <Title>Carlos Javier Sandoval</Title>
      <Subtitle>
        I'm a passionate Fullstack Developer from Guatemala with a knack for building sleek,
        scalable web apps. Skilled in React, Node.js, MongoDB, and AI integration. I turn ideas
        into smart, user-friendly experiences. 🚀
      </Subtitle>
      <Button href="#projects">✨ View My Work</Button>
      <FadeBottom />
    </Wrapper>
  );
};

export default Hero;
