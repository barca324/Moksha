import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Category = styled(motion.div)`
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid #00f0ff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 240, 255, 0.2);
    transform: scale(1.05);
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: rgba(0, 240, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.2);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
`;

const Question = styled.h3`
  color: #00f0ff;
  margin: 0;
  font-size: 1.2rem;
`;

const Answer = styled(motion.div)`
  color: #fff;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 240, 255, 0.2);
`;

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What if something is something?",
        answer: "If something is something then don't worry! It is everything you need to know and don't need to do anything else."
      },
      {
        question: "How does the mystical portal work?",
        answer: "The mystical portal operates on ancient energies that connect different realms of existence."
      },
      {
        question: "What are the sacred symbols?",
        answer: "The sacred symbols are ancient glyphs that represent the fundamental forces of the universe."
      }
    ]
  }
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <FAQContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        FAQs
      </Title>
      
      <Categories>
        {faqData.map((category, index) => (
          <Category
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.category}
          </Category>
        ))}
      </Categories>

      <FAQList>
        {faqData[0].questions.map((faq, index) => (
          <FAQItem
            key={index}
            onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Question>{faq.question}</Question>
            <AnimatePresence>
              {activeQuestion === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
