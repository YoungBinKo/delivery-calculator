import React, {useState} from 'react'
import '../App.css';

interface Props {
  name: string;
  requireInteger: boolean;
  value: number;
  onChange: (value: number) => void;
  symbol?: string;
}

export default function InputField({ name, value, requireInteger, onChange, symbol}: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [warningMessage, setWarningMessage] = useState("")

  const handleInvalidInput = (message: string) => {
    setWarningMessage(message)
    setTimeout(() => {
      setWarningMessage("")
    }, 3000);
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target; // const inputValue = event.target.value;
    const parsedValue = parseFloat(value);

    if (requireInteger) { // when necessary, check if the input is an integer
      Number.isInteger(parsedValue) ? console.log("good") : handleInvalidInput("Please enter only whole numbers!")
      setInputValue(parseInt(value, 10));
      onChange(parseInt(value, 10))
    } else {
      setInputValue(parsedValue);
      onChange(parsedValue)
    } 
  };

  return (
    <div>
      <div className='input-field'>
        <label htmlFor={name.replace(/\s/g,'')}>{name}</label>
        <input
          type="number"
          min="0"
          id={name.replace(/\s/g,'')}
          value={inputValue}
          onChange={handleChange}
          />
        <span>{symbol}</span>
      </div>
      {warningMessage && (
        <div style={{ color: "red" }}>{warningMessage}</div>
      )}
    </div>
  )
}