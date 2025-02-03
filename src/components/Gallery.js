import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

const PortalFrame = styled(motion.div)`
  width: min(90vw, 500px);
  height: min(80vh, 600px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 240, 255, 0.1);
    border: 2px solid rgba(0, 240, 255, 0.3);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
  }
`;

const AncientSymbols = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    background: rgba(0, 240, 255, 0.1);
    border: 1px solid rgba(0, 240, 255, 0.3);
  }
`;

const Symbol = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 1px solid #00f0ff;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background: rgba(0, 240, 255, 0.2);
  }
`;

const VerticalSymbols = styled.div`
  position: absolute;
  top: 100px;
  bottom: 100px;
  width: 60px;
  ${props => props.side}: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 240, 255, 0.1);
    border: 1px solid rgba(0, 240, 255, 0.3);
  }
`;

const MysticalPortal = styled(motion.div)`
  width: min(60%, 250px);
  height: min(60%, 250px);
  position: relative;
  margin: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%);
    animation: pulse 4s infinite;
  }

  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  }
`;

const PortalSymbol = styled(motion.div)`
  width: 100%;
  height: 100%;
  border: 2px solid #00f0ff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before, &::after {
    content: '';
    position: absolute;
    background: #00f0ff;
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
  }

  &::before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Crystal = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  ${props => props.side}: 40px;
  width: min(20%, 80px);
  height: min(25%, 120px);
  background: linear-gradient(to bottom right, rgba(0, 240, 255, 0.2), rgba(0, 240, 255, 0.1));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 1px solid rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <PortalFrame
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <AncientSymbols>
          {[...Array(5)].map((_, i) => (
            <Symbol
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </AncientSymbols>
        
        <VerticalSymbols side="left">
          {[...Array(6)].map((_, i) => (
            <Symbol
              key={i}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </VerticalSymbols>
        
        <VerticalSymbols side="right">
          {[...Array(6)].map((_, i) => (
            <Symbol
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </VerticalSymbols>

        <MysticalPortal>
          <PortalSymbol
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: 'absolute',
                  width: '80%',
                  height: '2px',
                  background: '#00f0ff',
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: 'center',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </PortalSymbol>
        </MysticalPortal>

        <Crystal
          side="left"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <Crystal
          side="right"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </PortalFrame>
    </GalleryContainer>
  );
};

export default Gallery;
