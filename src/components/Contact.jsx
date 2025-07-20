import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Wrapper = styled.section`
  min-height: 60vh;
  background: #0f172a;
  color: #cbd5e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem;
  scroll-snap-align: start;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #38bdf8;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 9999px;
  object-fit: cover;
  margin-bottom: 2rem;
  border: 4px solid #38bdf8;
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.3);
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Email = styled.a`
  color: #38bdf8;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: underline;
  margin-bottom: 2rem;
`;

const Icons = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #38bdf8;
    font-size: 2rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #6366f1;
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Let's Connect</Title>
      <Description>Feel free to reach out via email or check out my work on GitHub and LinkedIn.</Description>
      <ProfileImage src="/profile-image.jpg" alt="Carlos Sandoval" />
      <Email href="mailto:jawicho@outlook.com">jawicho@outlook.com</Email>
      <Icons>
        <a href="https://github.com/CarlosSandoval2003" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/carlos-sandoval-catalan" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </Icons>
    </Wrapper>
  );
};

export default Contact;
