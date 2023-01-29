import React, {useState} from 'react'

interface Props {
  name: string;
  isInteger: boolean;
  value: number;
  onChange: (value: number) => void;
  symbol?: string;
}

export default function InputField({ name, value, isInteger, onChange, symbol}: Props) {
  const [inputValue, setInputValue] = useState(value);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target; // const inputValue = event.target.value;

    if (isInteger) {
      setInputValue(parseInt(value, 10));
      onChange(parseInt(value, 10))
    } else {
      setInputValue(parseFloat(value));
      onChange(parseFloat(value))
    } 
  };

  return (
    <>
      <label htmlFor={name.replace(/\s/g,'')}>{name}</label>
      <input
        type="number"
        id={name.replace(/\s/g,'')}
        value={inputValue}
        onChange={handleChange}
      />
      <span>{symbol}</span>
    </>
  )
}