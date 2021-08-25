import React from 'react';

const Category = () => {
  return (
    <>
      <div className='text-2xl font-semibold mb-4'>Categories</div>
      <div className='ui three column grid'>
        <div className='column'>
          <div className='ui segment'>
            <h3 className='pb-2 text-lg'>Basic 500</h3>
            <p className='mb-4 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, impedit.
            </p>
            <div className='flex justify-end'>
              <button className='ui primary button'>Start</button>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='ui segment'>
            <h3 className='pb-2 text-lg'>Basic 500</h3>
            <p className='mb-4 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, impedit.
            </p>
            <div className='flex justify-end'>
              <button className='ui primary button'>Start</button>
            </div>
          </div>
        </div>

        <div className='column'>
          <div className='ui segment'>
            <h3 className='pb-2 text-lg'>Basic 500</h3>
            <p className='mb-4 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, impedit.
            </p>
            <div className='flex justify-end'>
              <button className='ui primary button'>Start</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
