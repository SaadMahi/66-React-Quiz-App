import { createContext, useContext, useEffect, useReducer } from 'react';

const QuizContext = createContext();

/** CREATING FAKE API
 * ? let's begin with installing a fake api, so that we fake that questions are rendering from api
 * ? why fake api? well as we have questions already we don't want them from actual api
 * ! let's create fake api using npm package called json
 *
 * Step 1:
 * in terminal run:
 * * npm i json-server
 *
 * Step 2:
 * copy questions.json file in data folder
 *
 * Step 3:
 * Now in order to run the package we need to add new npm script in package.json
 * locate scripts in package.json
 * in scripts add:
 * * "server": "json-server --watch file/path --port 8000"
 * This means we want so run json-server package and watch some file.
 * and that file is going to be our questions data, then we also mention the PORT
 *
 * Step 4:
 * On your terminal run:
 * ? instead of npm run dev:
 * * npm run server
 *
 * ? you will get two things in termal
 * Resources: you can use this url to fetch your data, this will be your fake api
 * ! http://localhost:8000/questions
 * Home:
 * ! http://localhost:8000
 */

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // this can be: 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = function (state, action) {
  // //console.log(action.payload);
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };

    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };

    default:
      throw new Error('Action is unknown');
  }
};

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'dataReceived',
          payload: data,
        });
      })
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numOfQuestions,
        maxPossiblePoints,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error(`QuizContext was used outside of the QuizPRovider`);
  }
  return context;
}

export { QuizProvider, useQuiz };
