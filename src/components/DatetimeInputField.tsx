import React, {useState} from 'react'

interface Props {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export default function DatetimeInputField({ name, value, onChange }: Props) {
  const [inputValue, setInputValue] = useState(value);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target; // const inputValue = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <>
      <label htmlFor={name.replace(/\s/g,'')}>{name}</label>
      <input
        type="datetime-local"
        id={name.replace(/\s/g,'')}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  )
}