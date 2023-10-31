import React from 'react';
import { useQuiz } from '../../context/QuizContext';

const Options = ({ question }) => {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {question.options.map((options, index) => (
        <button
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          className={`btn btn-option ${index === answer ? 'answer' : ''} 
          ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={options}
          disabled={hasAnswered}
        >
          {options}
        </button>
      ))}
    </div>
  );
};

export default Options;
