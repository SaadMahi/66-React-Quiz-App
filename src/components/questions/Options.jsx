import React from 'react';

const Options = ({ questionIndex, dispatch, answer }) => {
  const hasAnswered = answer !== null;
  return (
    <div className='options'>
      {questionIndex.options.map((options, index) => (
        <button
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          className={`btn btn-option ${index === answer ? 'answer' : ''} 
          ${
            hasAnswered
              ? index === questionIndex.correctOption
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
