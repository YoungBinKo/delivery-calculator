import React, {useState} from 'react'

interface Props {
  cartValue: number;
  deliveryDistance: number;
  numberOfItems: number;
  orderTime: string;
}

export default function DeliveryPrice({cartValue, deliveryDistance, numberOfItems, orderTime}: Props) {
  let deliveryPrice = 0;

  function isDuringFridayRush() {
    const orderTimeInDate = new Date(orderTime);
    const day = orderTimeInDate.getUTCDay();
    const hour = orderTimeInDate.getUTCHours();
    return day === 5 && hour >= 15 && hour < 19;
  }
  
  function calculateDeliveryPrice() {
    if (cartValue < 10 ){
      deliveryPrice = 10-cartValue
    }
    
    if (deliveryDistance <= 1000){
      deliveryPrice += 2
    } else {
      const additionalFee: number = Math.ceil((deliveryDistance-1000)/500);
      deliveryPrice += 2+additionalFee
    }
    
    if (numberOfItems>=5 && numberOfItems<=12) {
      deliveryPrice += 0.5*(numberOfItems-4)
    } else if (numberOfItems>12) {
      deliveryPrice += (1.2 + 0.5*(numberOfItems-4))
    }
    
    if (isDuringFridayRush()) {
      deliveryPrice *= 1.2
    } 

    if (deliveryPrice>15) {
      deliveryPrice = 15
    }
    return deliveryPrice
  }
    
  return (
    <div>
      Delivery Price: { cartValue<=100? calculateDeliveryPrice():0 }
      <span>€</span> 
    </div>
  )
}