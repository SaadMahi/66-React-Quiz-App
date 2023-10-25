# <div align='center'> [🎮 The React Quiz 🚀](https://66-react-quiz-app.vercel.app/) </div>
<p align="center">  <img src="https://github.com/SaadMahi/66-React-Quiz-App/assets/117567622/209f2d98-0427-4ec6-84a3-96c793dcc291" alt="Project Snapshot"> </p>

## Project Overview

This React project is a quiz game that allows users to answer a series of questions. The game has different screens for loading, error handling, starting the game, playing the quiz, and finishing the quiz. It also includes a timer and tracks the user's points and high score.

## Project Structure

The project structure includes several components:

- `Loader`: A loading indicator component.
- `Error`: A component for handling errors.
- `Header`: A component for rendering the header of the application.
- `Progress`: A component to show the user's progress during the quiz.
- `Main`: The main component that wraps the game screens.
- `Questions`: The component that displays the questions to the user.
- `NextButton`: A button component to move to the next question.
- `StartScreen`: The starting screen that displays the number of questions and starts the game.
- `FinishScreen`: The screen displayed when the game finishes, showing the user's score and high score.
- `Footer`: A component to render the footer of the application.
- `Timer`: A timer component that counts down the time for each question.

## Setting up a Fake API

The project simulates fetching quiz questions from a fake API using the `json-server` npm package. The process of setting up the fake API involves the following steps:

1. Install the `json-server` package by running `npm i json-server` in the terminal.
2. Copy a `questions.json` file into a data folder.
3. Add a new npm script in the `package.json` file under the "scripts" section. This script should be named "server" and uses the `json-server` package to watch the `questions.json` file and specify the port (e.g., 8000).
4. Run the fake API server by executing `npm run server` in the terminal. You'll receive URLs for accessing the fake API and the home page.

## State Management

The application uses a state management approach with an initial state defined as an object. This state includes information about the questions, the current status of the quiz (e.g., loading, ready, active, finished), the question index, the user's answer, points, high score, and remaining seconds for each question. State transitions are managed through a `reducer` function that handles various actions.

## Main Application Component

The `App` component is the root component of the application. It manages the state using the `useReducer` hook and renders different sections of the application based on the current quiz status. These sections include loading screens, error screens, the starting screen, the active quiz screen, and the finished quiz screen. The component also calculates and displays the user's progress and points.

## Components

The various custom components mentioned earlier are essential to create a user-friendly interface for the quiz game. These components are used to render specific parts of the application, such as the header, progress bar, questions, timer, buttons, and screens. They enhance the overall user experience and make the game engaging and interactive.

## Conclusion

This React quiz game project is a complete application that simulates fetching questions from a fake API, allows users to answer them, and tracks their progress and scores. It demonstrates the use of state management, components, and data fetching to create an interactive user experience. The project can serve as a foundation for building more complex quiz and trivia games with additional features and customization.
