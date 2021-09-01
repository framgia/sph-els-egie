import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuizItem from '../QuizItem';

const Category = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get(`/api/categories`).then((res) => {
      if (res.data.status === 200) {
        setQuizzes(res.data.quizzes);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className='text-2xl font-semibold mb-4'>Categories</div>
      <div className='ui three column grid'>
        {quizzes.map((quiz) => (
          <QuizItem quiz={quiz} key={quiz.title} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Category;
