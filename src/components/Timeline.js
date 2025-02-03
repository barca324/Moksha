import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const Title = styled(motion.h1)`
  color: #fff;
  font-size: 3rem;
  text-align: left;
  margin-bottom: 3rem;
  text-align: center
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  bottom: 0;
  width: 2px;
  background: rgba(0, 240, 255, 0.3);
`;

const TimelineEvent = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.align === 'left' ? 'flex-end' : 'flex-start'};
  padding-left: ${props => props.align === 'left' ? '0' : '52%'};
  padding-right: ${props => props.align === 'left' ? '52%' : '0'};
  margin-bottom: 4rem;
  position: relative;
`;

const EventContent = styled.div`
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 400px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.align === 'left' ? 'right: -10px' : 'left: -10px'};
    transform: translateY(-50%);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    ${props => props.align === 'left' 
      ? 'border-left: 10px solid rgba(0, 240, 255, 0.2)'
      : 'border-right: 10px solid rgba(0, 240, 255, 0.2)'};
  }
`;

const Year = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.align === 'left' ? 'right: -80px' : 'left: -80px'};
  transform: translateY(-50%);
  color: #00f0ff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const EventTitle = styled.h3`
  color: #00f0ff;
  margin: 0 0 1rem 0;
`;

const EventDescription = styled.p`
  color: #fff;
  margin: 0;
`;

const timelineData = [
  {
    year: 2003,
    title: "The Beginning",
    description: "The mystical journey begins",
    align: "left"
  },
  {
    year: 2007,
    title: "First Discovery",
    description: "Ancient symbols revealed",
    align: "right"
  },
  {
    year: 2010,
    title: "The Great Convergence",
    description: "When worlds aligned",
    align: "left"
  },
  {
    year: 2014,
    title: "Modern Evolution",
    description: "Bridging past and future",
    align: "right"
  }
];

const Timeline = () => {
  return (
    <TimelineContainer>
      <Title
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         Timeline
      </Title>
      
      <TimelineLine />
      
      {timelineData.map((event, index) => (
        <TimelineEvent
          key={index}
          align={event.align}
          initial={{ opacity: 0, x: event.align === 'left' ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <EventContent align={event.align}>
            <EventTitle>{event.title}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
          </EventContent>
          <Year align={event.align}>{event.year}</Year>
        </TimelineEvent>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
