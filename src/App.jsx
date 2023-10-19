import Header from './components/header/Header';
import Main from './components/main/Main';

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

function App() {
  return (
    <div className='app'>
      <Header />
      <Main>
        <p>1/5</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
