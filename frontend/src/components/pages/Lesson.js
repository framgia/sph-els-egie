import React from 'react';
import '../App.css';
import Question from '../Question';
import Answer from '../Answer';
import LessonResult from './LessonResult';

class Lesson extends React.Component {
  state = {
    questions: {
      1: '従業員',
      2: '労働者，勤務者，仕事をする人',
      3: '発表，告知',
    },
    answers: {
      1: {
        1: 'announcement',
        2: 'employee',
        3: 'worker',
        4: 'staff',
      },
      2: {
        1: 'worker',
        2: 'staff',
        3: 'announcement',
        4: 'employee',
      },
      3: {
        1: 'staff',
        2: 'employee',
        3: 'worker',
        4: 'announcement',
      },
    },
    correctAnswers: {
      1: '2',
      2: '1',
      3: '4',
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let {
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      score,
      correctAnswers,
    } = this.state;

    return (
      <React.Fragment>
        {step <= Object.keys(questions).length ? (
          <div className='ui grid center aligned'>
            <div className='eight wide column mt-10'>
              <div className='text-xl'>Basic 500</div>
              <div className='h-full flex justify-center'>
                <Question question={questions[step]} />
              </div>
            </div>

            <div className='eight wide column mt-10'>
              <div className='text-xl text-right'>
                {step} of {Object.keys(questions).length}
              </div>
              <Answer
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
              />

              <button
                className='blue ui right floated button NextStep'
                disabled={
                  clickedAnswer && Object.keys(questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <LessonResult
            score={score}
            questions={questions}
            correctAnswers={correctAnswers}
            answers={answers}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Lesson;
