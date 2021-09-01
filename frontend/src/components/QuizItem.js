import React from 'react';
import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
  return (
    <div className='column'>
      <div className='ui segment'>
        <h3 className='pb-2 text-lg'>{quiz.title}</h3>
        <p className='mb-4 text-base'>{quiz.description}</p>
        <div className='flex justify-end'>
          <Link to={`/lesson/${quiz.id}`}>
            <button className='ui primary button'>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
