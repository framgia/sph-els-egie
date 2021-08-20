import React from 'react';
import './App.css';

const WordsLog = () => {
  return (
    <div className='border-2 p-6'>
      <div className='text-xl font-semibold border-b-2 pb-3'>Words learned</div>
      <div className='ui two column grid'>
        <div className='column border-r-2 mt-10'>
          <div className='ui two column grid'>
            <div className='column text-center'>
              <div className='text-lg font_weight'>Words</div>
              <div>Japanese</div>
            </div>
            <div className='column text-center'>
              <div className='text-lg font_weight'>Answers</div>
              <div>English</div>
            </div>
          </div>
        </div>
        <div className='column mt-10'>
          <div className='ui two column grid'>
            <div className='column text-center'>
              <div className='text-lg font_weight'>Words</div>
              <div>Japanese</div>
            </div>
            <div className='column text-center'>
              <div className='text-lg font_weight'>Answers</div>
              <div>English</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordsLog;
