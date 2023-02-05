import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import DatetimeInputField from './components/DatetimeInputField';
import DeliveryPrice from './components/DeliveryPrice';

function App() {
  const [cartValue, setCartValue] = useState(10.7);
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
    <div className="app">
      <h1>Delivery Fee Calculator</h1>
      <InputField name='Cart Value' requireInteger={false} value={cartValue} onChange={handleCartValueChange} symbol='€' />
      <InputField name='Delivery Distance' requireInteger={true} value={deliveryDistance} onChange={handleDeliveryDistanceChange} symbol='m' />
      <InputField name='Number of Items' requireInteger={true} value={numberOfItems} onChange={handleNumberOfItems } />
      <DatetimeInputField name='Order Time' value={orderTime} onChange={handleOrderTime} />
      <DeliveryPrice cartValue={cartValue} deliveryDistance={deliveryDistance} numberOfItems={numberOfItems} orderTime={orderTime} />
    </div>
  );
}

export default App;
