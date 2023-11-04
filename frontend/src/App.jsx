import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [input, setInput] = useState('');
  const calculateResult = (input) => {
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = null;
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }
      if (!operator) {
        setInput(parseFloat(input).toString());
        return;
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      let result;
      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        default:
          throw new Error('Invalid operator');
      }
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  const handleButtonClick = (value) => {
    value === 'C'
      ? setInput('0')
      : value === '<'
      ? setInput(input.slice(0, -1) || 0)
      : value === '='
      ? calculateResult(input)
      : setInput((preValue) => preValue + value);
  };
  useEffect(() => {
    setInput('0');
  }, []);
  return (
    <div className='container'>
      <div className='calc'>
        <div className='output'>
          <div className='previous-operand'></div>
          <div className='current-operand'>{input}</div>
        </div>

        <div>
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('<')}>&lt;</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
