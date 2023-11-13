import React from 'react';
import { useQuiz } from '../../context/QuizContext';

const NextButton = () => {
  const { dispatch, answer, numOfQuestions, index } = useQuiz();

  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className='btn btn-ui'
      >
        NextButton
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: 'finish' })}
        className='btn btn-ui'
      >
        Finsih
      </button>
    );
};

export default NextButton;
