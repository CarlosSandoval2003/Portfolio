import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import projectData from '../data/projects'; // Aquí estará tu array de proyectos con imágenes e info

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

const CardContent = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 6px 12px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 1rem;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 2;
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
  transform: ${({ active }) =>
    active ? 'translateX(0) scale(1)' : 'translateX(120px) scale(0.9) rotateY(-10deg)'};
  z-index: ${({ active }) => (active ? 2 : 1)};
  cursor: ${({ active }) => (active ? 'pointer' : 'pointer')};
  filter: ${({ active }) => (active ? 'none' : 'blur(1px) brightness(0.7)')};
   &:hover ${CardContent} {
    opacity: 1;
  }
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
      { threshold: 0.3 } // Ajusta el umbral según necesidad
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
  {projectData.map((project, index) => {
    const isActive = index === activeIndex;

return (
  <Card
  key={index}
  active={isActive}
  onClick={() => {
    if (isActive) {
      window.open(project.link, "_blank");
    } else {
      setActiveIndex(index);
    }
  }}
>
  {isActive && (
    <>
      <CardContent>Try it live →</CardContent>
    </>
  )}

  {project.mediaType === "video" ? (
    <video
      src={project.media}
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  ) : (
    <img
      src={project.media}
      alt={project.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  )}
</Card>

);

  })}
</Cards>

      </Container>
    </Section>
  );

};

export default Projects;