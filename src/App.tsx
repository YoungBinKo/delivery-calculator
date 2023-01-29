import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import DatetimeInputField from './components/DatetimeInputField';
import DeliveryPrice from './components/DeliveryPrice';

function App() {
  const [cartValue, setCartValue] = useState(20);
  const [deliveryDistance, setDeliveryDistance] = useState(2235);
  const [numberOfItems, setNumberOfItems] = useState(4);
  const [orderTime, setOrderTime] = useState('2023-04-25T15:10');

  const handleCartValueChange = (value: number) => {
    console.log(value)
    setCartValue(value);
  }

  const handleDeliveryDistanceChange = (value: number) => {
    console.log(value)
    setDeliveryDistance(value);
  }

  const handleNumberOfItems = (value: number) => {
    console.log(value)
    setNumberOfItems(value);
  }

  const handleOrderTime = (value: string) => {
    console.log(value)
    setOrderTime(value);
  }

  return (
    <>
      <InputField name='Cart Value' isInteger={false} value={cartValue} onChange={handleCartValueChange} symbol='€' />
      <InputField name='Delivery Distance' isInteger={true} value={deliveryDistance} onChange={handleDeliveryDistanceChange} symbol='m' />
      <InputField name='Number of Items' isInteger={true} value={numberOfItems} onChange={handleNumberOfItems } />
      <DatetimeInputField name='Order Time' value={orderTime} onChange={handleOrderTime} />
      <button>Calculate develiver price</button>
      <DeliveryPrice cartValue={cartValue} deliveryDistance={deliveryDistance} numberOfItems={numberOfItems} orderTime={orderTime} />
    </>
  );
}

export default App;
