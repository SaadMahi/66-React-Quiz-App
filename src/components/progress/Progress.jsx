import React from 'react';
import { useQuiz } from '../../context/QuizContext';

const Progress = () => {
  const { index, numOfQuestions, points, maxPossiblePoints, answer } =
    useQuiz();

  return (
    <header className='progress'>
      <progress
        max={numOfQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
