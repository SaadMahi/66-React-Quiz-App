import React from 'react';

const NextButton = ({ dispatch, answer, numQuestions, index }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: 'nextQuestion' })}
        className='btn btn-ui'
      >
        NextButton
      </button>
    );

  if (index === numQuestions - 1)
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
