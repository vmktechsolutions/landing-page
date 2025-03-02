import React, { useEffect, useState } from 'react';

const TypeAnimation = ({ sequence, wrapper: Wrapper = 'span', speed = 50, repeat = Infinity, className = '' }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    
    if (typeof sequence[currentIndex] === 'string') {
      if (isTyping) {
        const currentText = sequence[currentIndex];
        if (text.length < currentText.length) {
          timeout = setTimeout(() => {
            setText(currentText.slice(0, text.length + 1));
          }, speed);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, sequence[currentIndex + 1] || 2000);
        }
      } else {
        if (text.length > 0) {
          timeout = setTimeout(() => {
            setText(text.slice(0, -1));
          }, speed / 2);
        } else {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => {
            if (prevIndex >= sequence.length - 1 || typeof sequence[prevIndex + 2] !== 'string') {
              return repeat ? 0 : prevIndex;
            }
            return prevIndex + 2;
          });
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isTyping, sequence, speed, repeat]);

  return <Wrapper className={className}>{text}</Wrapper>;
};

export default TypeAnimation;
