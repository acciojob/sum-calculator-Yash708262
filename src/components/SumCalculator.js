import React, { useState, useEffect } from 'react';

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    // Asynchronously calculate the sum whenever the numbers array changes
    const calculateSum = async () => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      setTotalSum(sum);
    };

    // Call the calculateSum function
    calculateSum();
  }, [numbers]); // Only re-run the effect when numbers change

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleAddNumber = () => {
    const parsedNumber = parseInt(currentInput, 10);
    if (!isNaN(parsedNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedNumber]);
      setCurrentInput(''); // Clear the input field
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={currentInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add Number</button>
      <h2>Total Sum: {totalSum}</h2>
    </div>
  );
};

export default SumCalculator;