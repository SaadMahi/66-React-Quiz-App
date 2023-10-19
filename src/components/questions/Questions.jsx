import React from 'react';

import Options from './Options';

const Questions = ({ questionIndex, dispatch, answer }) => {
  //   //console.log(questionIndex.options);
  return (
    <div>
      <h4>{questionIndex.question}</h4>
      <Options
        questionIndex={questionIndex}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Questions;
