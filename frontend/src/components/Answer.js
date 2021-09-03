import React from 'react';

const Answer = ({ answer, checkAnswer, correctAnswer, clickedAnswer }) => {
  const answerItem = Object.keys(answer).map((qAnswer, i) => (
    <li
      key={qAnswer}
      onClick={() => checkAnswer(qAnswer)}
      className={
        correctAnswer === qAnswer
          ? 'correct'
          : clickedAnswer === qAnswer
          ? 'incorrect'
          : ' '
      }
    >
      {answer[qAnswer]}
    </li>
  ));

  return (
    <React.Fragment>
      <ul
        disabled={clickedAnswer ? true : false}
        className='flex flex-col Answers'
      >
        {answerItem}
      </ul>
      <div className='text-left mt-5 text-lg font-semibold'>
        {correctAnswer
          ? 'Correct Answer'
          : clickedAnswer
          ? 'Incorrect Answer'
          : ''}
      </div>
    </React.Fragment>
  );
};

export default Answer;
