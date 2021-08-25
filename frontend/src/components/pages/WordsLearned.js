import React from 'react';
import DashboardDetail from '../DashboardDetail';
import WordsLog from '../WordsLog';

const WordsLearned = () => {
  return (
    <div className='ui grid'>
      <div className='four wide column'>
        <DashboardDetail path='/words-learned' word='Learned 20 words' />
      </div>

      <div className='twelve wide column'>
        <WordsLog />
      </div>
    </div>
  );
};

export default WordsLearned;
