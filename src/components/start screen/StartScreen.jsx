import React from 'react';

const StartScreen = ({ numOfQuestions }) => {
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} question to test your React mastery</h3>
      <button className='btn '>Let's start</button>
    </div>
  );
};

export default StartScreen;
