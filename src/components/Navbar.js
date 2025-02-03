import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled(motion.nav)`
  background: rgba(10, 10, 15, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 240, 255, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.a`
  color: #00f0ff;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #00f0ff;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px #00f0ff;
  }
  
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const MysticalOrb = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #00f0ff;
  border-radius: 50%;
  filter: blur(5px);
  pointer-events: none;
`;

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [orb, setOrb] = useState({ x: 0, y: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    setOrb({
      x: e.clientX,
      y: e.clientY,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setOrb(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `rgba(10, 10, 15, ${Math.min(0.95, 0.8 + scrollPosition / 1000)})`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <NavList>
        <li><NavItem onClick={(e) => handleNavClick(e, 'home')}>Home</NavItem></li>
        <li><NavItem onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</NavItem></li>
        <li><NavItem onClick={(e) => handleNavClick(e, 'faq')}>FAQs</NavItem></li>
        <li><NavItem onClick={(e) => handleNavClick(e, 'timeline')}>Timeline</NavItem></li>
      </NavList>
      <AnimatePresence>
        <MysticalOrb
          animate={{
            x: orb.x - 5,
            y: orb.y - 5,
            opacity: orb.opacity
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
