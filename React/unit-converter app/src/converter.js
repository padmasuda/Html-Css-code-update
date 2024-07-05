import React, { useState } from 'react';

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
  },
  // Add more categories and units as needed
};

const Converter = () => {
  const [category, setCategory] = useState('length');
  const [inputUnit, setInputUnit] = useState('meter');
  const [outputUnit, setOutputUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  const handleConversion = () => {
    const inputInBaseUnit = inputValue * units[category][inputUnit];
    const convertedValue = inputInBaseUnit * (1 / units[category][outputUnit]);
    setOutputValue(convertedValue);
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <div>
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {Object.keys(units).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          From:
          <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
            {Object.keys(units[category]).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <label>
          To:
          <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
            {Object.keys(units[category]).map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>
        <input type="number" value={outputValue} readOnly />
      </div>
      <button onClick={handleConversion}>Convert</button>
    </div>
  );
};

export default Converter;