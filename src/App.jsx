import Loader from './components/loader/Loader';
import Error from './components/error/Error';

import Header from './components/header/Header';
import Progress from './components/progress/Progress';
import Main from './components/main/Main';
import Questions from './components/questions/Questions';
import NextButton from './components/next button/NextButton';

import StartScreen from './components/start screen/StartScreen';
import FinishScreen from './components/finish screen/FinishScreen';
import Footer from './components/footer/Footer';
import Timer from './components/Timer';
import { useQuiz } from './context/QuizContext';

function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Questions />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
