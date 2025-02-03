import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background-color: #0a0a0f;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
    pointer-events: none;
    z-index: 1;
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #0a0a0f);
    pointer-events: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="home"
        >
          <Home />
        </Section>
        
        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="gallery"
        >
          <Gallery />
        </Section>
        
        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="faq"
        >
          <FAQ />
        </Section>
        
        <Section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          id="timeline"
        >
          <Timeline />
        </Section>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
