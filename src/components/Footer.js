import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(to top, #0a0a0f, transparent);
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.5), transparent);
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const MysticalSymbol = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 240, 255, 0.5);
  border-radius: 50%;
  position: relative;
  margin-bottom: 1.5rem;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 240, 255, 0.3);
    border-radius: 50%;
  }
  
  &::before {
    width: 70%;
    height: 70%;
  }
  
  &::after {
    width: 40%;
    height: 40%;
  }
`;

const FooterText = styled(motion.p)`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-size: 0.9rem;
  max-width: 600px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e4405f; /* Instagram's brand color */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <MysticalSymbol
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <SocialLinks>
          <SocialIcon href="https://www.instagram.com/mokshansut/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
        </SocialLinks>
        <FooterText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Netaji Subhas University Of Technology
          Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
        </FooterText>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
