import { useReducer, useState } from 'react';

const reducer = function (currState, action) {
  console.log(currState, action);

  if (action.type === 'increment') return currState + 1;
  if (action.type === 'decrement') return currState - 1;
  if (action.type === 'setCount') return action.payload;
};

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date('june 20 2027');
  date.setDate(date.getDate() + count);

  const decrement = function () {
    /** ACTION OF USE REDUCER FUNCTION
     * ! let's use action of reducer function
     * * this object we passed in is called as action when we work with reducer function
     * * this object we made could have any shape that we wanted
     * ! but it is standard to just have type property and payload property
     * ! this is the standard we will always see when using the useReducer hook
     */
    dispatch({ type: 'decrement' });

    // dispatch(-1);

    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const increment = function () {
    dispatch({ type: 'increment' });

    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  // user input onChange function
  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });

    // setCount(Number(e.target.value));
  };

  // slider onChange function
  const defineStep = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
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
