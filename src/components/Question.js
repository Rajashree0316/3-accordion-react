import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>

      </header>

      {showInfo && <p>{info}</p>}

    </article>
  );
};

export default Question;

/* Steps to understand the code 
1}By default useState is false for showInfo
2)Only showInfo is true i want to display  -using conditional rendering 
3)Toggle button:if showInfo => false +icon, true -icon  - using ternary operator */