import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

const reducer = function (currState, action) {
  console.log(currState, action);

  switch (action.type) {
    case 'decrement':
      return { ...currState, count: currState.count - currState.step };
    case 'increment':
      return { ...currState, count: currState.count + currState.step };
    case 'setCount':
      return { ...currState, count: action.payload };
    case 'setStep':
      return { ...currState, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('unknown action');
  }
};

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 20 2027');
  date.setDate(date.getDate() + count);

  const decrement = function () {
    dispatch({ type: 'decrement' });
  };

  const increment = function () {
    dispatch({ type: 'increment' });
  };

  // user input onChange function
  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  // slider onChange function
  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className='counter'>
      {/* range meter */}
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      {/* decrement, value, increment */}
      <div>
        <button onClick={decrement}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increment}>+</button>
      </div>

      {/* readable date format */}
      <p>{date.toDateString()}</p>

      {/* reset button */}
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
