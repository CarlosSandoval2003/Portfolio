import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import projectData from '../data/projects';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const shake = keyframes`
  0% { transform: translate(0.5px, 0.5px) rotate(0deg); }
  20% { transform: translate(-0.5px, -0.5px) rotate(-0.3deg); }
  40% { transform: translate(0.5px, 0.5px) rotate(0.3deg); }
  60% { transform: translate(-0.5px, 0.5px) rotate(-0.3deg); }
  80% { transform: translate(0.5px, -0.5px) rotate(0.3deg); }
  100% { transform: translate(0.5px, 0.5px) rotate(0deg); }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 0.8s ease forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s ease forwards;
        `}
`;

const Info = styled.div`
  flex: 1;
  min-width: 300px;
  z-index: 3;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeIn} 1s ease forwards;
    `}
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #1e293b;
  color: #38bdf8;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.85rem;
`;

const Cards = styled.div`
  flex: 1;
  position: relative;
  min-width: 300px;
  height: 420px;
  perspective: 1500px;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease, z-index 0.5s;
  transform: ${({ index, activeIndex }) => {
    if (index === activeIndex) return 'translateX(0) scale(1)';
    if ((index + 1) % projectData.length === activeIndex) return 'translateX(120px) scale(0.9) rotateY(-10deg)';
    return 'translateX(-120px) scale(0.9) rotateY(10deg)';
  }};
  z-index: ${({ index, activeIndex }) => (index === activeIndex ? 2 : 1)};
  cursor: pointer;
  filter: ${({ index, activeIndex }) => (index === activeIndex ? 'none' : 'blur(1px) brightness(0.7)')};

  ${({ index, activeIndex }) =>
    index === activeIndex &&
    css`
      &:hover {
        animation: ${shake} 0.6s infinite;
      }
    `}
`;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <Section id="projects" ref={sectionRef}>
      <Container isVisible={isVisible}>
        <Info isVisible={isVisible}>
          <Title>{projectData[activeIndex].title}</Title>
          <Description>{projectData[activeIndex].description}</Description>
          <TechStack>
            {projectData[activeIndex].tech.map((tech, index) => (
              <Tag key={index}>{tech}</Tag>
            ))}
          </TechStack>
        </Info>
        <Cards>
          {projectData.map((project, index) => (
            <Card
              key={index}
              as={index === activeIndex ? 'a' : 'div'}
              bg={project.image}
              index={index}
              activeIndex={activeIndex}
              href={index === activeIndex ? project.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => index !== activeIndex && setActiveIndex(index)}
            />
          ))}
        </Cards>
      </Container>
    </Section>
  );
};

export default Projects;



<Cards>
  {projectData.map((project, index) => {
    const isActive = index === activeIndex;

    if (isActive) {
      return (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <Card
            bg={project.image}
            active={true}
            onClick={(e) => e.stopPropagation()} // pa que no dispare setActiveIndex innecesario
          />
        </a>
      );
    } else {
      return (
        <Card
          key={index}
          bg={project.image}
          active={false}
          onClick={() => setActiveIndex(index)}
        />
      );
    }
  })}
</Cards>