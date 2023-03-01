import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface IProps{
  id: number;
  title: string;
  info: string;
}
const Question:React.FC<IProps> = ({title,info}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
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
  )
};

export default Question;
