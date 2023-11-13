# Quiz Context in React

This code snippet demonstrates the use of `useContext` and `useReducer` in a React application to manage a quiz game.

### QuizContext

A context called `QuizContext` is created using `createContext()`. This context will hold the state and provide it to the components that need it.

### Fake API Setup

Before diving into the code, a fake API is set up using the `json-server` package. It involves creating a fake API server that serves quiz questions from a JSON file. The steps for setting up this fake API are clearly outlined in the comments, which include installing the `json-server` package and configuring it.

### State Management

The state for the quiz game is managed using `useReducer`. The initial state (`initialState`) includes properties such as questions, status, index, answer, points, highscore, and seconds remaining. The `reducer` function handles state transitions based on various actions.

### Actions

The actions include:

- `dataReceived`: When the quiz data is successfully fetched.
- `dataFailed`: In case of a data fetch error.
- `start`: Initiates the quiz, setting it to 'active' and determining the total time based on the number of questions.
- `newAnswer`: Records the user's answer and updates their score.
- `nextQuestion`: Moves to the next question.
- `finish`: Marks the end of the quiz and records the high score if applicable.
- `restart`: Resets the quiz to its initial state.
- `tick`: Handles the countdown of the time remaining for each question.

### QuizProvider

The `QuizProvider` component wraps the application and makes the state and dispatch available to child components through the context. It also initiates the fetch request to the fake API upon component mounting.

### useQuiz

The `useQuiz` custom hook is used to conveniently access the `QuizContext`. It checks if the context is available and throws an error if it's used outside of the `QuizProvider`.

The `QuizProvider` and `useQuiz` components provide a robust structure for managing a quiz game in a React application, complete with state management, actions, and data retrieval from a fake API.
