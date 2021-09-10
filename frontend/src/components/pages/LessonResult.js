import React from 'react';

const LessonResult = ({ score, questions, correctAnswers, answers }) => {

  const questionItem = Object.keys(questions).map((item) => (
    <tr key={item}>
      <td>
        <i className='check icon'></i>
      </td>
      <td>{questions[item]}</td>
      <td>{answers[item][correctAnswers[item]]}</td>
    </tr>
  ));

  console.log(answers)

  return (
    <React.Fragment>
      <div className='ui grid center aligned'>
        <div className='eight wide column text-xl mt-10'>Basic 500</div>
        <div className='eight wide column text-xl mt-10'>
          Result: {score} of {Object.keys(questions).length}
        </div>
      </div>
      <table className='ui striped table'>
        <thead className='center aligned'>
          <tr>
            <th></th>
            <th>Word</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody className='center aligned'>{questionItem}</tbody>
      </table>
    </React.Fragment>
  );
};

export default LessonResult;
