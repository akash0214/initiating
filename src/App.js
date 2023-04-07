import { useState } from 'react';
import './App.css';
function App() {
  const[count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className='w-[100vw] h-[100vh] flex items-center flex-col justify-center bg-sky-900 gap-5'>
      <div className='text-xl text-sky-500 font-semibold'>
        Increment & Decrement
      </div>
      <div className='flex gap-5 text-center bg-slate-50 rounded'>
        <button onClick={decreaseHandler} className='text-4xl border-r-2 border-gray-500 w-16 py-3'>
          -
        </button>
        <div className='text-4xl w-20 py-3'>
          {count}
        </div>
        <button onClick={increaseHandler} className='text-4xl border-l-2 border-gray-500 w-16 py-3'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='bg-lime-500 text-lg font-semibold py-2 px-5 rounded-sm'>
        Reset
      </button>
    </div>
  );
}

export default App;
