import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Orb = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(0, 240, 255, 0.2), transparent);
  filter: blur(5px);
`;

const Title = styled(motion.h1)`
  color: #00f0ff;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
  position: relative;
  z-index: 1;
`;

const Subtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  max-width: 600px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #00f0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  &::after {
    content: '';
    width: 2px;
    height: 50px;
    background: linear-gradient(to bottom, #00f0ff, transparent);
  }
`;

const orbVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  const handleScroll = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeContainer>
      <BackgroundOrbs>
        {[...Array(5)].map((_, i) => (
          <Orb
            key={i}
            size={100 + Math.random() * 100}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={orbVariants}
            animate="animate"
          />
        ))}
      </BackgroundOrbs>
      
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Moksha'25
      </Title>
      
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Journey through the ancient wisdom and mystical realms of digital enlightment
      </Subtitle>

      <ScrollIndicator
        onClick={handleScroll}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Explore
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home;
